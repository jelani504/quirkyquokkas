import * as anchor from '@project-serum/anchor';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { SystemProgram } from '@solana/web3.js';
import {
  LAMPORTS_PER_SOL,
  SYSVAR_RENT_PUBKEY,
  TransactionInstruction,
} from '@solana/web3.js';

export interface AlertState {
  open: boolean;
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error' | undefined;
}

export const toDate = (value?: anchor.BN) => {
  if (!value) {
    return;
  }

  return new Date(value.toNumber() * 1000);
};

const numberFormater = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const formatNumber = {
  format: (val?: number) => {
    if (!val) {
      return '--';
    }

    return numberFormater.format(val);
  },
  asNumber: (val?: anchor.BN) => {
    if (!val) {
      return undefined;
    }

    return val.toNumber() / LAMPORTS_PER_SOL;
  },
};

export const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID =
  new anchor.web3.PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');

export const CIVIC = new anchor.web3.PublicKey(
  'gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs',
);

export const getAtaForMint = async (
  mint: anchor.web3.PublicKey,
  buyer: anchor.web3.PublicKey,
): Promise<[anchor.web3.PublicKey, number]> => {
  return await anchor.web3.PublicKey.findProgramAddress(
    [buyer.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()],
    SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  );
};

export const getNetworkExpire = async (
  gatekeeperNetwork: anchor.web3.PublicKey,
): Promise<[anchor.web3.PublicKey, number]> => {
  return await anchor.web3.PublicKey.findProgramAddress(
    [gatekeeperNetwork.toBuffer(), Buffer.from('expire')],
    CIVIC,
  );
};

export const getNetworkToken = async (
  wallet: anchor.web3.PublicKey,
  gatekeeperNetwork: anchor.web3.PublicKey,
): Promise<[anchor.web3.PublicKey, number]> => {
  return await anchor.web3.PublicKey.findProgramAddress(
    [
      wallet.toBuffer(),
      Buffer.from('gateway'),
      Buffer.from([0, 0, 0, 0, 0, 0, 0, 0]),
      gatekeeperNetwork.toBuffer(),
    ],
    CIVIC,
  );
};

export function createAssociatedTokenAccountInstruction(
  associatedTokenAddress: anchor.web3.PublicKey,
  payer: anchor.web3.PublicKey,
  walletAddress: anchor.web3.PublicKey,
  splTokenMintAddress: anchor.web3.PublicKey,
) {
  const keys = [
    {
      pubkey: payer,
      isSigner: true,
      isWritable: true,
    },
    {
      pubkey: associatedTokenAddress,
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: walletAddress,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: splTokenMintAddress,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: SystemProgram.programId,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: TOKEN_PROGRAM_ID,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: SYSVAR_RENT_PUBKEY,
      isSigner: false,
      isWritable: false,
    },
  ];
  return new TransactionInstruction({
    keys,
    programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
    data: Buffer.from([]),
  });
}

// Home

export const homeData = {
  lightBg:false,
  imgStart: '',
  lightTopLine: true, 
  lightText: true, 
  lightTextDesc: true, 
  primary: true,
  buttonLabel: 'Join Discord',
  description: 'Quirky Quokkas is the happiest collection of 7839 NFTs on both the Solana and Ethereum blockchains.',
  headline: 'The Happiest NFT on the Plannet!',
  topLine: 'Quirky Quokkas',
  img: '',
  alt: 'Image',
  start: '' 
};

//About

export const aboutData = {
  lightBg:false,
  imgStart: '',
  lightTopLine: true, 
  lightText: true, 
  lightTextDesc: true, 
  primary: true,
  buttonLabel: 'Buy',
  description: 'Quirky Quokkas is the happiest collection of 7839 NFTs on both the Solana and Ethereum blockchains.',
  headline: 'The Happiest NFT on the Plannet!',
  topLine: 'Quirky Quokkas',
  img: '',
  alt: 'Image',
  start: '' 
};

//Roadmap

export const roadmapData = [
  { gettingStarted: [
    {text:'Launch multimedia pages on all social platforms', completed: false},
    {text:'Launch website at QuirkyQuokkas.com ', completed: false},
    {text:'Announce mint details', completed: false},
    {text:'Schedule drop on nftcalendar.io', completed: false},
    {text:'Secure placement on rarity.tools "Upcoming NFT Sales" project list', completed: false},
    {text:'Create Charity Fund', completed: false},
  ]}
  ,
   {communityBuilding: [
     {text:'Open whitelist through multi-phase challenges', completed: false},
     {text:'Community art constests - All Contest winners recieve exclusive prizes', completed: false},
   ]},
   {launch: [
     {text:'Open Whitelist Mint on QuirkyQuokkas.com - 24 hours before general mint opens', completed: false},
     {text:'Open General Mint on QuirkyQuokkas.com', completed: false},
   ]},
  { expansion: [
     {text:'Give away free Ethereum NFT counterpart for each Quokka holder!', completed: false},
     {text:'- DAO Votes on artists to create subsequent versions of Quirky Quokkas to be distributed to Original Quokka Holders for free (+ Gas fees)!', completed: false},
     {text:'Sponsor TikTok, Youtube and Twitter influencers to craft viral content', completed: false},
     {text:'Hire Full Marketing team', completed: false},
   ]}
];

// Collection

export const collectionData = {
  lightBg:false,
  imgStart: '',
  lightTopLine: true, 
  lightText: true, 
  lightTextDesc: true, 
  primary: true,
  buttonLabel: 'Buy',
  description: 'Quirky Quokkas is the happiest collection of 7839 NFTs on both the Solana and Ethereum blockchains.',
  headline: 'The Happiest NFT on the Plannet!',
  topLine: 'Quirky Quokkas',
  img: '',
  alt: 'Image',
  start: '' 
};

//FAQ
export const faqData = {
  lightBg:false,
  imgStart: '',
  lightTopLine: true, 
  lightText: true, 
  lightTextDesc: true, 
  primary: true,
  buttonLabel: 'Buy',
  description: 'Quirky Quokkas is the happiest collection of 7839 NFTs on both the Solana and Ethereum blockchains.',
  headline: 'The Happiest NFT on the Plannet!',
  topLine: 'Quirky Quokkas',
  img: '',
  alt: 'Image',
  start: '' 
};

// Team

export const teamData = {
  lightBg:false,
  imgStart: '',
  lightTopLine: true, 
  lightText: true, 
  lightTextDesc: true, 
  primary: true,
  buttonLabel: 'Buy',
  description: 'Quirky Quokkas is the happiest collection of 7839 NFTs on both the Solana and Ethereum blockchains.',
  headline: 'The Happiest NFT on the Plannet!',
  topLine: 'Quirky Quokkas',
  img: '',
  alt: 'Image',
  start: '' 
};


