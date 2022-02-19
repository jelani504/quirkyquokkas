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
     {text:'DAO Votes on artists to create subsequent versions of Quirky Quokkas to be distributed to Original Quokka Holders for free (+ Gas fees)!', completed: false},
     {text:'Sponsor TikTok, Youtube and Twitter influencers to craft viral content', completed: false},
     {text:'Hire Full Marketing team', completed: false},
   ]}
];

// Collection

export const collectionData = {
  // lightTopLine: true, 
  // lightText: true, 
  // lightTextDesc: true, 
  primary: true,
  buttonLabel: 'Buy',
  description: 'Quirky Quokkas is the happiest collection of 7839 NFTs on both the Solana and Ethereum blockchains.',
  headline: 'The Happiest NFT on the Plannet!',
  topLine: 'Quirky Quokkas',
  img: '',
  alt: 'Image',
};

//FAQ
// [[question, answer]]
export const faqData = [
  ['What is Quirky Quokkas?', 'Quirky Quokkas is the happiest collection of 7839 1/1 generative NFT art pieces! Owning an original Quirky Quokka on the Solana blockchain will give you access to the Quirky Quokka DAO where you will be able to vote on which artist will create the art for the next version of Quirky Quokkas. You will be able to mint each version of Quirky Quokkas on both the Ethereum and Solana blockchains for free(+ gas fees)!'],
  ['How many versions of the collection will be released?', 'That will be for the DAO to decide but we anticipate many versions of the collection with great artist involved!'],
  ['What is the price for minting a Quirky Quokka?', 'The mint price will be .75 Solana for Whitelisted members and 1 Solana for public sale. The public sale will be ___.'],
  ['How can I get a Quirky Quokka?', 'You will be able to mint Quirky Quokkas on our website ____ or directly through our smart contract via our discord server. Our mint is scheduled for ______ but if you miss out on that they will be available for purchase on after market websites.'],
  ['How can I use my NFT?', 'Along with being a perfect profile picture, you can use your Original Quirky Quokka NFT to gain access to the Quirky Quokka DAO where you can vote on which artist will be commissioned to make the next Quirky Quokka Collection. With an Original Quirky Quokka you will be able to mint each subsequent Quirky Quokka for free(+ gas fees).  We will also work to create avatars for various metaverses.'],
  ['What blockchain is it on? ', 'The original Quirky Quokkas collection will be on the Solana blockchain. All holders of the original collection will be able to mint a Quokka on the Ethereum chain as well as each subsequent version of Quirky Quokkas on both the Solana and Ethereal networks. '],
  ['How is this different from every other PFP Project?', 'This is an evolving project the allows holders to collectively choose which artist they want to commission the next edition of the collection. Hold until you’re satisfied with a version and then sell for the versions you don’t prefer. Our team is dedicated to creating versions of Quirky Quokkas across all blockchains and metaverses for free to holders of Original Quokkas! Follow our Twitter and Discord for more info on what we are doing differently.'],
  ['Are all Quirky Quokkas that are minted unique?','Yes, each Quirky Quokka minted will be unique! You can only get one of each attribute but you may not get all. You are guaranteed to get some type of fur, background and eyes!'],
  ['What are the categories of attributes?', ''],
  ['How many people will get on the whitelist?', '1880 Lucky members will be whitelisted. Whitelist challenges are regularly posted in our discord.'],
  ['Is there still a chance to get on the whitelist and how do I get on it?', 'Yes, there will be more opportunities to get on the whitelist so keep your eyes peeled! We will make a post with the requirements when there is another whitelist event in our discord.'],
  ['When is the Quirky Quokkas NFT collection releasing?', ''],
  ['How many Quirky Quokkas will be reserved for Staff, Marketing, and Giveaways?', '347 Quokkas'],
  ['Why do we need royalties?','The amount of royalties is currently fixed at 7.5% to finance the Quirky Quokka Community projects. We have ambitious goals to build the community to its maximum potential. The funds collected will benefit the holders and helps secure the welfare of future utilities.'],
  ['Why 7839 Quokkas?', 'Quokkas are the happiest animal on the planet! Our goal is to be the happiest NFT on the planet! We want all of our community to be happy with all that comes with being a member so we put happiness in everything we do. We chose 7839 because it is mathematically a happy number.'],
  ['What will the charity fund be used for?','Our team believes in protecting animals. We have built a charity fund to contribute to various animal activists organizations.'],
  ['Reveal Type?', 'Each Quirky Quokka will be revealed as soon as you mint it!'],
  ['What is your Twitter?', ''],
  ['What is your TikTok?',''],
  ['What is your Instagram?', ''],
];

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


