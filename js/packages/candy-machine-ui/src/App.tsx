import './App.css';
import { useMemo } from 'react';
import * as anchor from '@project-serum/anchor';
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { NavBar, Footer } from './components/index';

import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from '@solana/wallet-adapter-wallets';

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';

import { ThemeProvider, createTheme } from '@material-ui/core';
import RoadMap from './components/RoadMap/RoadMap';
import FAQ from './components/FAQ/FAQ';

const theme = createTheme({
  palette: {
    primary: { // works
      main: '#000',
      contrastText: '#fff',
    },
  },
});
// type: 'dark',
    // primary: '#000'


const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
  try {
    const candyMachineId = new anchor.web3.PublicKey(
      process.env.REACT_APP_CANDY_MACHINE_ID!,
    );

    return candyMachineId;
  } catch (e) {
    console.log('Failed to construct CandyMachineId', e);
    return undefined;
  }
};

const candyMachineId = getCandyMachineId();
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost
  ? rpcHost
  : anchor.web3.clusterApiUrl('devnet'));

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
const txTimeoutInMilliseconds = 30000;

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [],
  );

  return (
    <Router>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <NavBar />
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletDialogProvider>
              <Routes>
          <Route path="/"  element={<Home
                candyMachineId={candyMachineId}
                connection={connection}
                startDate={startDateSeed}
                txTimeout={txTimeoutInMilliseconds}
                rpcHost={rpcHost}
              />} />
              <Route path='/collection'>
              </Route>
              <Route path='/roadmap' element={<RoadMap/>}>
              </Route>
              <Route path='/rarity'>
              </Route>
              <Route path='/faq' element={<FAQ/>}>
              </Route>
        </Routes>
              <Footer/>
            </WalletDialogProvider>
          </WalletProvider>
        </ConnectionProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
