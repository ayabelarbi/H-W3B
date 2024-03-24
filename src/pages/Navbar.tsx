import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Magic } from "magic-sdk";
import { TaquitoExtension } from "@magic-ext/taquito";

import { TezosToolkit } from "@taquito/taquito";

import { Button, HStack, Input } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const apiKey: string = "pk_live_6E23BEDC7CE6E1F0" || "";
const magic = new Magic(apiKey, {
  extensions: [
    new TaquitoExtension({
      rpcUrl: "https://ghostnet.tezos.marigold.dev/",
    }),
  ],
});

const Navbar = () => {
  const [email, setEmail] = useState("");
  const [publicAddress, setPublicAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [sendXTZAmount, setSendXTZAmount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMetadata, setUserMetadata] = useState({});
  const [sendingTransaction, setSendingTransaction] = useState(false);

  useEffect(() => {
    magic.user.isLoggedIn().then(async (magicIsLoggedIn) => {
      setIsLoggedIn(magicIsLoggedIn);
      if (magicIsLoggedIn) {
        const publicAddress = (await magic.taquito.getPublicKey()).pkh;
        setPublicAddress(publicAddress);
        setUserMetadata(await magic.user.getMetadata());
      }
    });
  }, [isLoggedIn]);
  const history = useNavigate();

  const gotoMap = () => {
    history("/map");
  };

  const gotoLeaderboard = () => {
    history("/leaderboard");
  };

  const gotoCollection = () => {
    history("/Collection");
  };
  const login = async () => {
    await magic.auth.loginWithEmailOTP({ email });
    setIsLoggedIn(true);
  };

  const logout = async () => {
    await magic.user.logout();
    setIsLoggedIn(false);
  };

  const handleMagicSign = async () => {
    setSendingTransaction(true);
    const Tezos = new TezosToolkit("https://ghostnet.tezos.marigold.dev");
    const magicSigner = await magic.taquito.createMagicSigner();

    Tezos.setProvider({ signer: magicSigner });

    const operation = await Tezos.contract.transfer({
      to: destinationAddress,
      amount: sendXTZAmount,
    });

    setSendingTransaction(false);
    console.log("result", operation);
  };

  return (
    <Flex as="nav" width="100%" padding="4" boxShadow="md">
      <Link to="/">
        <span>LOYALT</span>
      </Link>

      <Spacer />
      <Button
        colorScheme="whiteAlpha"
        borderRadius="10px"
        textColor="white"
        height="55px"
        width="150px"
        margin="10px"
        onClick={gotoMap}
        justifyContent="center" // This centers the buttons horizontally
        alignItems="center"
        border="1px solid black" // Add a border color
        _hover={{ border: "1px solid black" }}
        fontFamily={"Roboto"}
        color={"black"}
      >
        Map
      </Button>
      <Button
        colorScheme="whiteAlpha"
        borderRadius="10px"
        textColor="white"
        height="55px"
        width="150px"
        margin="10px"
        fontFamily={"Roboto"}
        color={"black"}
        onClick={gotoLeaderboard}
        justifyContent="center" // This centers the buttons horizontally
        alignItems="center"
        border="1px solid black" // Add a border color
        _hover={{ border: "1px solid black" }}
      >
        Leaderboard
      </Button>
      <Button
        colorScheme="whiteAlpha"
        borderRadius="10px"
        textColor="white"
        height="55px"
        width="150px"
        margin="10px"
        fontFamily={"Roboto"}
        color={"black"}
        onClick={gotoCollection}
        justifyContent="center" // This centers the buttons horizontally
        alignItems="center"
        border="1px solid black" // Add a border color
        _hover={{ border: "1px solid black" }}
      >
        Collections
      </Button>

      <Spacer />

      {!isLoggedIn ? (
        <HStack border="black" background="bleu">
          <>
            <Input
              border={"1px solid black"}
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></Input>
            <Button
              colorScheme="whiteAlpha"
              borderRadius="20px"
              textColor="white"
              height="55px"
              width="100px"
              margin="10px"
              onClick={login}
              fontFamily={"Roboto"}
              color={"black"}
              border="1px solid black" // Add a border color
              _hover={{ border: "1px solid black" }}
              isDisabled={
                !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)
              }
            >
              Login
            </Button>
          </>
        </HStack>
      ) : (
        <HStack>
          <div className="info">
            <a
              href={`https://ghost.tzstats.com/${publicAddress}`}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(publicAddress);
                alert("Address copied to clipboard");
              }}
            >
              {`${publicAddress.substring(0, 6)}...${publicAddress.substring(
                publicAddress.length - 4
              )}`}
            </a>
          </div>
          <Button onClick={logout}>Logout</Button>
        </HStack>
      )}
    </Flex>
  );
};

export default Navbar;
