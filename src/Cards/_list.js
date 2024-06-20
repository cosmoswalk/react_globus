
const DATA2 = [
    {
        name: "Solana",
        agency: "Mainnet",
        url: "https://solana.com/",
        description: "Solana is a bit of a newcomer blockchain that has attracted a quite substantial developer community that builds on its crypto app ecosystem. Officially launched in 2020, Solana’s use of a timekeeping method called Proof-of-History in tandem with its Proof-of-Stake consensus protocol have made it fast, efficient, and very scalable.",
        delegate: "https://www.validators.app/validators/9oJWvtDMLLM5U5hQ8iZ5LjbZLtHHzys91hvQC6esmsrJ?locale=en&network=mainnet",
    }
    ,
    {
        name: "Haqq",
        agency: "Mainnet",
        url: "https://haqq.network/",
        description: "Haqq is a scalable, high-throughput Proof-of-Stake blockchain that is fully compatible and interoperable with Ethereum. It's built using the Cosmos SDK which runs on top of Tendermint Core consensus engine. Ethereum compatibility allows developers to build applications on Haqq using the existing Ethereum codebase and toolset, without rewriting smart contracts that already work on Ethereum or other Ethereum-compatible networks. Ethereum compatibility is done using modules built by Tharsis for their Evmos network.",
        delegate: "https://haqq.explorers.guru/validator/haqqvaloper1tnm7y48w5nh8wt0s2u0fxwu607xtqhk6v99773",
    }
    ,
    {
        name: "Archway",
        agency: "Mainnet",
        url: "https://archway.io/",
        description: "Archway is a Cosmos-native incentivized smart contract chain that enables developers to easily deploy high-performance dapps that capture the value they create for the network.",
        delegate: "https://archway.explorers.guru/validator/archwayvaloper173zlk665f6f4hl8rnmelhql9qkttc2e79z5xn6",
    }
    ,
    {
        name: "Umee",
        agency: "Mainnet",
        url: "https://umee.cc/",
        description: "Umee is a cross chain DeFi hub that interconnects between blockchains. As a base layer DeFi protocol, an ecosystem of applications can be built on top of Umee. The Umee Blockchain facilitates instant interoperability using the Tendermint Proof of Stake consensus protocol with the Cosmos ecosystem, Ethereum network, side chain architectures, layer 2 scaling solutions, and alternative base layer protocols.",
        delegate: "https://wallet.keplr.app/#/umee/stake?modal=detail&validator=umeevaloper1wwl9f8wcc0am9wruvmx4hjzdv7ewfcex0lz9vp&all-list=true",
    }
    ,
    {
        name: "Umee",
        agency: "Testnet",
        url: "https://umee.cc/",
        description: "Umee is a cross chain DeFi hub that interconnects between blockchains. As a base layer DeFi protocol, an ecosystem of applications can be built on top of Umee. The Umee Blockchain facilitates instant interoperability using the Tendermint Proof of Stake consensus protocol with the Cosmos ecosystem, Ethereum network, side chain architectures, layer 2 scaling solutions, and alternative base layer protocols.",
        delegate: "",
    }
    ,
    {
        name: "Stride",
        agency: "Mainnet",
        url: "https://stride.zone/",
        description: "Stride is a blockchain focused solely on liquid staking. Using Stride, you can earn both staking and DeFi yields across the Cosmos IBC ecosystem. What makes your project unique? Stride is the only liquid-staking-focused blockchain providing true neutrality and ability to optimise liquidity for staked assets. History of your project. Stride launched in August 2022 as the first native liquid-staking solution for the Cosmos ecosystem, and since then: Stride has emerged as the biggest Cosmos liquid-staking solution with $35M+ TVL.",
        delegate: "https://wallet.keplr.app/chains/stride?modal=validator&chain=stride-1&validator_address=stridevaloper12guhgs4zgp787mp0nh8x7kmvtw64acqstjdxjy",
    }
    ,
    {
        name: "Humans",
        agency: "Mainnet",
        url: "https://humans.ai/",
        description: "Humans.ai is a next generation blockchain platform that brings together an ecosystem of stakeholders around the use of AI to create at scale. It combines a library of AI tools into a creative studio suite where users will be able to pick and choose as they bring their ideas to life. Individuals are empowered to create and own their digital likenesses, which may be used by themselves and others in the creation of any number of digital assets. The synthetic media, AI apps, and other digital assets utilize blockchain technology to generate Non-Fungible Tokens (NFTs) as a way of creating transparency, provenance, accountability, and long-term governance.",
        delegate: "https://explorer.stake-take.com/humans/staking/humanvaloper1ueev8v666uzcszxd2srpkfzyt62chc62hmv64j",
    }
    ,
    {
        name: "Humans",
        agency: "Testnet",
        url: "https://humans.ai/",
        description: "Humans.ai is a next generation blockchain platform that brings together an ecosystem of stakeholders around the use of AI to create at scale. It combines a library of AI tools into a creative studio suite where users will be able to pick and choose as they bring their ideas to life. Individuals are empowered to create and own their digital likenesses, which may be used by themselves and others in the creation of any number of digital assets. The synthetic media, AI apps, and other digital assets utilize blockchain technology to generate Non-Fungible Tokens (NFTs) as a way of creating transparency, provenance, accountability, and long-term governance.",
        delegate: "",
    }
    ,
    {
        name: "Quicksilver",
        agency: "Mainnet",
        url: "https://quicksilver.zone/",
        description: "Quicksilver is a permissionless, sovereign Cosmos SDK zone providing liquid staking for the entire Cosmos Ecosystem. Through Quicksilver, users are issued a voucher, qASSET, representative of their staked asset, which can then be used in DeFi protocols. Quicksilver can scale seamlessly to any IBC-connected chain, and users participating in the protocol can delegate to any validator of their choosing, as well as retain their voting rights through the protocol’s Governance by Proxy feature. QCK is the native token of Quicksilver, which will be used for securing the network through staking, paying transaction fees for the Quicksilver zone, and participating in governance. The QCK token will also accrue rewards from the Staking Rewards fees collected by the protocol.",
        delegate: "https://explorer.stake-take.com/quicksilver/staking/quickvaloper1asdtp0g8ahmga4m0cra6f69nls6z4ane6g4yjc",
    }
    ,
    {
        name: "Quicksilver",
        agency: "Testnet",
        url: "https://quicksilver.zone/",
        description: "Quicksilver is a permissionless, sovereign Cosmos SDK zone providing liquid staking for the entire Cosmos Ecosystem. Through Quicksilver, users are issued a voucher, qASSET, representative of their staked asset, which can then be used in DeFi protocols. Quicksilver can scale seamlessly to any IBC-connected chain, and users participating in the protocol can delegate to any validator of their choosing, as well as retain their voting rights through the protocol’s Governance by Proxy feature. QCK is the native token of Quicksilver, which will be used for securing the network through staking, paying transaction fees for the Quicksilver zone, and participating in governance. The QCK token will also accrue rewards from the Staking Rewards fees collected by the protocol.",
        delegate: "",
    }
    ,
    {
        name: "Gitopia",
        agency: "Mainnet",
        url: "https://gitopia.com/",
        description: "Gitopia is an application specific blockchain built using Cosmos SDK framework. The use of Cosmos SDK has enabled us to leverage the Tendermint BFT consensus engine and build the blockchain that is optimized for Gitopia’s use case. Along with the high throughput and fast finality, Cosmos IBC also enables other IBC compatible chains to integrate directly with Gitopia. Learn more about why Gitopia is Building on Cosmos SDK here.",
        delegate: "https://explorer.stake-take.com/gitopia/staking/gitopiavaloper1cc4an0kn0v96ac67acch676f74xl070sjtq3qe",
    }
    ,
    {
        name: "Gravity",
        agency: "Mainnet",
        url: "https://www.gravitybridge.net/",
        description: "Gravity Bridge is an open-source and decentralized bridge that acts as a neutral arbiter for securely connecting Ethereum and Cosmos (IBC) ecosystems.",
        delegate: "https://wallet.keplr.app/#/gravity-bridge/stake?modal=detail&validator=gravityvaloper123a04v3hxf40yl4sa2924v5zpmp7qat6psznex&all-list=true",
    }
    ,
    {
        name: "Aura",
        agency: "Mainnet",
        url: "https://aura.network/",
        description: "Aura Network is a scalable, agile and effortless Layer-1 blockchain with a comprehensive ecosystem built to accelerate global NFTs adoption. Aura Network focuses on solving the problem of adopting NFTs and blockchain technology in general, which is currently a highly complex process. Aura Network will surely bring more value to brands, IP owners, and the broad audience as they can accelerate their business using cutting-edge technologies with no hassle at all.",
        delegate: "https://explorer.stake-take.com/aura/staking/auravaloper1wkpfyw4cutnh86jr987nqjzyh2e5far6dszelv",
    }
    ,
    {
        name: "Meme",
        agency: "Mainnet",
        url: "https://memenetwork.io/",
        description: "Meme Network is a MEME-friendly ecosystem based on Web 3.0 feature “High Transparency”, “Irreversible Data” and “Collective Consensus”. Our tools assist user freely read and write information, as well as rewarding contributor.",
        delegate: "https://explorer.stake-take.com/meme/staking/memevaloper12j8867yuc5q7f0g7x0jdwq3qpuv25aq2ngzqf2",
    }
    ,
    {
        name: "Kyve",
        agency: "Mainnet",
        url: "https://www.kyve.network/",
        description: "KYVE Network is revolutionizing customized access to on- and off-chain data by providing fast and easy tooling for decentralized data validation, immutability, and retrieval. Fetching. Uploaders fetch data from a source and can perform computational work before storing it on Arweave.",
        delegate: "https://explorer.stake-take.com/kyve/staking/kyvevaloper1sfwfat9p9k7datgy0kzge7pv0szcd5ycc0jxre",
    }
    ,
    {
        name: "Arable",
        agency: "Mainnet",
        url: "https://arable.finance/",
        description: "Arable offers low-fee EVM compatible cosmos chain, multichain derivatives trading, farming, copy trading and voting power lending service on EVM and Cosmos.",
        delegate: "https://explorer.stake-take.com/acre/staking/acrevaloper17gc07hawajnfg7e4539pmps0zfkwrdf4jskm8x",
    }
    ,
    {
        name: "Pylons",
        agency: "Mainnet",
        url: "https://www.pylons.tech/",
        description: "Develop & trade digital assets on Cosmos with Pylons - a powerful toolset with an SDK, a wallet, and minter.",
        delegate: "https://explorer.stake-take.com/pylons/staking/pylovaloper1yc06qqa99vz50jrh64fctt0gvjj7pp7n7029c7",
    }
    ,
    {
        name: "Lambda",
        agency: "Mainnet",
        url: "https://lambda.im/",
        description: "The blockchain of Lambda Network is based on Cosmos SDK and Tendermint, will support EVM and Solidity smart contracts that users can freely deploy. Lambda Storage will provide secure and high-speed data storage services for on-chain NFTs.",
        delegate: "https://explorer.stake-take.com/lambda/staking/lambvaloper1vn22ggc6z0h57t5z9jkqslpl7z556fpj6rtutz",
    }
    ,
    {
        name: "Rebus",
        agency: "Mainnet",
        url: "https://www.rebuschain.com/",
        description: "Rebus is a regulated investment platform that uses a native utility coin, $REBUS, to allow a channel of asset managers and other financial institutions to manage and sell DeFi instruments along with their Traditional (TradFi) instruments.",
        delegate: "https://explorer.stake-take.com/rebus-mainnet/staking/rebusvaloper106k0ejdk79r5zvdfgpp95vw7n5w367zn6u9dlj",
    }
    ,
    {
        name: "Canto",
        agency: "Mainnet",
        url: "https://canto.io/",
        description: "canto is a layer-1 blockchain built to deliver on the promise of defi. as a post-traditional financial movement, canto enables accessibility, transparency, and freedom for new systems. driven by a loosely organized collective of chain-native builders, canto provides a new commons powered by free public infrastructure",
        delegate: "https://explorer.stake-take.com/canto/staking/cantovaloper1s5a9nczvvsd82pznj56d3nfngq74gcazvpgfsv",
    }
    ,
    {
        name: "Evmos",
        agency: "Mainnet",
        url: "https://evmos.org/",
        description: "Evmos is the one of the first Ethereum Virtual Machine-based blockchains in the Cosmos ecosystem and enables developers to launch apps that run smart contracts across any number of EVM and Cosmos-based blockchains. It makes that process as simple and seamless as possible by allowing developers to continue creating apps in Solidity and Vyper like they’re accustomed to in the Ethereum ecosystem. Evmos opens a new frontier for blockchain applications, expanding the functionality of the EVM by enabling cross-chain applications that tap the liquidity and user bases of multiple blockchain ecosystems to provide more unified experiences.",
        delegate: "https://explorer.stake-take.com/evmos/staking/evmosvaloper1adl6xd3klu689caymhn6hhakpfues5e30n5p3m",
    }
    ,
    {
        name: "Archway",
        agency: "Testnet",
        url: "https://archway.io/",
        description: "Archway is a Cosmos-native incentivized smart contract chain that enables developers to easily deploy high-performance dapps that capture the value they create for the network.",
        delegate: "",
    }
    ,
    {
        name: "Althea",
        agency: "Testnet",
        url: "https://www.althea.net/",
        description: "Althea L1 is a purpose-built hybrid EVM blockchain for connectivity and networked utilities, the first to be engineered from the ground up, together with its community of users.",
        delegate: "",
    }
    ,
    {
        name: "Cascadia",
        agency: "Testnet",
        url: "https://www.cascadia.foundation/",
        description: "Cascadia is a hybrid, layer-1 blockchain built to explore the nature of incentives on network effects, starting with ve-tokenomics.",
        delegate: "",
    }
    ,
    {
        name: "Celestia",
        agency: "Testnet",
        url: "https://celestia.org/",
        description: "Celestia is perfectly suited for a novel scaling solution called rollups which push state execution off-chain and rely on a base chain for consensus and data availability. Optimistic rollups require data availability to detect fraud and zero-knowledge rollups require data availability to reconstruct the state of the chain. Secure light clients for interoperability. Cross-chain interoperability relies on light clients which are typically not secure because they make an honest majority assumption.",
        delegate: "",
    }
    ,
    {
        name: "Namada",
        agency: "Testnet",
        url: "https://namada.net/",
        description: "Namada is a sovereign proof-of-stake blockchain, using Tendermint BFT consensus, that enables multi-asset private transfers for any native or non-native asset using a multi-asset shielded pool derived from the Sapling circuit. Namada features full IBC protocol support, a natively integrated Ethereum bridge, a modern proof-of-stakesystem with automatic reward compounding and cubic slashing, a stake-weighted governance signalling mechanism, and a proactive/retroactive public goods funding system.",
        delegate: "",
    }
    ,
    {
        name: "Ojo",
        agency: "Testnet",
        url: "https://ojo.network/",
        description: "OJO is an IBC-native decentralized price oracle incubated by Umee, created for all IBC assets. It offers secure and robust interchain communication for accurate price data from various authenticated centralized and decentralized data sources.",
        delegate: "",
    }
    ,
    {
        name: "Dymension",
        agency: "Testnet",
        url: "https://dymension.xyz/",
        description: "The Dymension Hub is the calculated protocol layer and acts as a decentralized source of truth for the network. Dymension Hub is a Proof of Stake blockchain that provides consensus, security and liquidity for RollApps.",
        delegate: "",
    }
    ,
    {
        name: "Elys",
        agency: "Testnet",
        url: "https://elys.network/",
        description: "Elys is a Cosmos SDK built, fast layer 1 blockchain, and is the first, and only, decentralized suite of financial applications in the Cosmos ecosystem with multiple unique features. Elys Attributes. Cutting edge integration for a seamless onboarding experience for non crypto-native users. A non-custodial Automated Market Maker (AMM) style Decentralized Exchange (DEX) powered by liquidity providers & liquidity pools.",
        delegate: "",
    }
    ,
    {
        name: "OKP4",
        agency: "Testnet",
        url: "https://okp4.network/",
        description: "OKP4 is a public PoS layer 1 blockchain built for trust-minimized data sharing. It is specifically designed to enable communities to share data, algorithms, and resources to create a sovereign Dataverse and an environment of applications on top of it. OKP4 protocol allows the creation of fully customizable Data SpacesDiscover the Data Space where communities can agree on rules and contribute with any digital resource (dataset, algorithm, storage or computation resource) to create new knowledge and applications.",
        delegate: "",
    }
    ,
    {
        name: "Noria",
        agency: "Testnet",
        url: "https://noria.network/",
        description: "Noria is a scalable blockchain infrastructure designed to overcome limitations like low transaction throughput and high latency. It utilizes a sharded architecture and a hybrid proof-of-stake and proof-of-authority consensus mechanism to achieve parallel processing and efficient validation. With innovative data storage techniques, Noria aims to enable decentralized applications and facilitate real-world blockchain adoption.",
        delegate: ""
    }
    ,
];



export default DATA2;
