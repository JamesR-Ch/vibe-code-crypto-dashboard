# 🚀 ViteAssistant - Crypto Dashboard

A comprehensive cryptocurrency dashboard built with modern web technologies. This application provides real-time blockchain data visualization, wallet balance tracking, and DeFi integration with a sleek, responsive interface.

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC.svg)](https://tailwindcss.com/)
[![Ethers.js](https://img.shields.io/badge/Ethers.js-6.8.1-blue.svg)](https://docs.ethers.org/)

## ✨ Features

### Core Functionality
- 💰 **Real-time Wallet Balance Tracking** - Monitor your crypto portfolio across multiple networks
- 📊 **Live Cryptocurrency Prices** - Get up-to-date market data for Bitcoin and altcoins
- 🌐 **DeFi Integration** - Venus Protocol BSC balance monitoring
- 🎯 **Multi-Network Support** - Base network and BSC compatibility
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### Technical Features
- ⚡️ **Lightning Fast Performance** - Powered by Vite with HMR
- 🔥 **Modern React 19** - Latest React features and concurrent rendering
- 🎨 **Beautiful UI Components** - Custom-designed with Tailwind CSS
- 📦 **Type Safety** - Full TypeScript implementation
- 🔍 **Code Quality** - ESLint configuration for clean code
- 🛠️ **Blockchain Integration** - Ethers.js for Web3 interactions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ViteAssistant.git
cd ViteAssistant
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

## 🚀 Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## 🧪 Linting

Run the linter to check for code quality issues:

```bash
npm run lint
# or
yarn lint
```

## 📦 Project Structure

```
ViteAssistant/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── BalanceCard.tsx  # Wallet balance display
│   │   ├── VenusCard.tsx    # Venus Protocol integration
│   │   ├── PricesCard.tsx   # Cryptocurrency prices
│   │   ├── Header.tsx       # Application header
│   │   └── ...              # Other UI components
│   ├── hooks/               # Custom React hooks
│   │   ├── useBalances.ts   # Balance management
│   │   └── usePrices.ts     # Price data fetching
│   ├── utils/               # Utility functions
│   │   ├── api.ts           # API integrations
│   │   └── formatters.ts    # Data formatting
│   ├── types/               # TypeScript type definitions
│   ├── constants/           # Network and config constants
│   └── App.tsx              # Main application component
├── public/                  # Static assets
├── dist/                    # Production build output
└── ...config files         # Vite, TypeScript, Tailwind configs
```

## 🛠️ Tech Stack

### Frontend
- **[React 19.1.0](https://reactjs.org/)** - Modern UI library with concurrent features
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Static type checking
- **[Vite 6.3.5](https://vitejs.dev/)** - Lightning-fast build tool and dev server
- **[Tailwind CSS 3.3.6](https://tailwindcss.com/)** - Utility-first CSS framework

### Blockchain & Web3
- **[Ethers.js 6.8.1](https://docs.ethers.org/)** - Ethereum library for blockchain interactions
- **Multi-network Support** - Base Chain and Binance Smart Chain integration
- **DeFi Integration** - Venus Protocol for lending/borrowing data

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and quality assurance
- **[PostCSS](https://postcss.org/)** - CSS processing and optimization
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Automatic CSS vendor prefixes

## 🌟 Key Components

- **BalanceCard** - Displays wallet balance with real-time updates
- **VenusCard** - Shows Venus Protocol lending/borrowing positions
- **PricesCard** - Live cryptocurrency price tracking with custom altcoin support
- **Responsive Grid Layout** - Optimized for all screen sizes

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🤝 Contributing

We welcome contributions to ViteAssistant! Here's how you can help:

1. **Fork the Repository** - Click the fork button on GitHub
2. **Create a Feature Branch** - `git checkout -b feature/amazing-feature`
3. **Make Your Changes** - Implement your feature or bug fix
4. **Run Tests** - Ensure all tests pass and code follows our standards
5. **Commit Changes** - `git commit -m 'Add amazing feature'`
6. **Push to Branch** - `git push origin feature/amazing-feature`
7. **Open a Pull Request** - Describe your changes and submit for review

### Development Guidelines
- Follow the existing code style and TypeScript patterns
- Add appropriate error handling for blockchain interactions
- Test your changes across different screen sizes
- Update documentation when adding new features

## 🎯 Roadmap

- [ ] **Multi-wallet Support** - MetaMask, WalletConnect integration
- [ ] **Additional DeFi Protocols** - Compound, Aave, Uniswap integration
- [ ] **Portfolio Analytics** - Historical data and performance tracking
- [ ] **Dark Mode** - Theme switching functionality
- [ ] **Mobile App** - React Native implementation
- [ ] **Notifications** - Price alerts and transaction updates

## 📈 Screenshots

*Coming soon - Add screenshots of your dashboard in action*

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/ViteAssistant/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

---

<div align="center">

**Built with ❤️ using Claude Code**

*ViteAssistant - Your Gateway to DeFi Portfolio Management*

</div>
