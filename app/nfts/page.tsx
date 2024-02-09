import TopNFTs from "@/components/home/top-nfts";
import NFTCart from "@/components/reusable/nft-cart";
import { arabic, rajdhani } from "@/fonts/fonts";
import { dataTopNFT } from "@/utils/top-nfts-now";

export default function Home() {
  return (
    <div
      className={`${rajdhani.variable} ${arabic.variable} bg-gradient bg-no-repeat bg-cover bg-top -mt-[100px]`}
    >
      <TopNFTs>
        {dataTopNFT.map((nft) => {
          return <NFTCart key={nft.id} nft={nft} />;
        })}
      </TopNFTs>
    </div>
  );
}
