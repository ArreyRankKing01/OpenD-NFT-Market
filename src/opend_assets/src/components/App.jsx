import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./Item";
import Minter from "./Minter";

function App({ currentUser, opend, nft }) {
  const [ownedNFTs, setOwnedNFTs] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const nfts = await opend.getOwnedNFTs(currentUser);
        setOwnedNFTs(nfts);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    fetchNFTs();
  }, [currentUser, opend]);

  return (
    <div className="App">
      <Header />

      {/* Minter Component for creating new NFTs */}
      <Minter opend={opend} currentUser={currentUser} />

      {/* List of owned NFTs */}
      <div className="nft-gallery">
        {ownedNFTs.length === 0 ? (
          <p>You don't own any NFTs yet.</p>
        ) : (
          ownedNFTs.map((nftId) => (
            <Item key={nftId.toText()} id={nftId} opend={opend} nft={nft} />
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;