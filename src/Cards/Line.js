import React, { useEffect, useState, useRef } from "react";
import * as echarts from 'echarts';
import Decimal from 'decimal.js';


export default function Linecharts({ name, color }) {
    const chart = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [prices, setPrices] = useState([]);
    const [dates, setDates] = useState([]);


    const showChart = (ele, x, y) => {
        // Dispose of the old chart if there's one
        if (echarts.getInstanceByDom(ele)) {
            echarts.dispose(ele);
        }

        let mychart = echarts.init(ele);
        let option = {
            grid: {
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px"
            },
            xAxis: {
                type: 'category',
                data: x,
                show: false
            },
            yAxis: {
                type: 'value',
                show: false,
                min: Math.min(...y),
                max: Math.max(...y)
            },
            series: [
                {
                    name: name,
                    showSymbol: false,
                    data: y,
                    type: 'line',
                    symbolSize: 1,
                    markLine: { silent: true },
                    color: color,
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: color
                            },
                            {
                                offset: 1,
                                color: 'rgba(0, 0, 0, 0)'
                            }
                        ])
                    }
                    
                }
            ],
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(32, 33, 36,.7)',
                borderColor: 'rgba(32, 33, 36,0.20)',
                borderWidth: 1,
                formatter: params => {
                    const index = params[0].dataIndex; 
                    return `
                        <div>
                            <strong> ${name}</strong><br />
                            ${dates[index]}<br />
                            Price: $${new Decimal(params[0].data).toFixed(7)}
                        </div>
                    `;
                },
                textStyle: {
                    color: '#fff',
                    fontSize: '12'
                }
            }
        };
        
       
        mychart.setOption(option);
    }

    useEffect(() => {
        
        Promise.all([
            fetch('json/price_value.json').then(response => response.json()),
            fetch('json/price_date.json').then(response => response.json())
        ])
        .then(([priceData, dateData]) => {
            const matchedPriceData = priceData.find(item => item.name_ch === name);
            const matchedDateData = dateData.find(item => item.name_ch === name);
    
           
            if (!matchedPriceData || !matchedDateData) {
                console.error('No data found for the provided name:', name);
                setIsLoading(false);
                return;
            }
    
        const pricesArr = [matchedPriceData.price, matchedPriceData.price1, matchedPriceData.price2, matchedPriceData.price3, matchedPriceData.price4].reverse();
        const datesArr = [matchedDateData.date_price, matchedDateData.date_price1, matchedDateData.date_price2, matchedDateData.date_price3, matchedDateData.date_price4].reverse();
 
        setPrices(pricesArr);
        setDates(datesArr);

            setIsLoading(false);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            setIsLoading(false);
        });
    }, [name]);

    useEffect(() => {
        if (!isLoading) {
            showChart(chart.current, dates, prices.map(price => Decimal(price).valueOf()));
        }
    }, [isLoading, dates, prices]);



    return (
        <div className="bar-chart-container">
            {isLoading && (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            )}
            <div className="chart" ref={chart}></div>
        </div>
    );
}
