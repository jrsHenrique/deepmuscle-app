import MessageBox from "../../components/MessageBox";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Icon,
  Img,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdAutoAwesome, MdBolt, MdEdit, MdPerson } from "react-icons/md";
import Bg from "/assets/bg-image.png";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../../../store/aiMessage";
import { uptadeMessage } from "../../../store/humanMessage";

const ChatBox = () => {
  const [inputOnSubmit, setInputOnSubmit] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const [model, setModel] = useState("gpt-4o");
  const [loading, setLoading] = useState(false);
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const inputColor = useColorModeValue("navy.700", "white");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgIcon = useColorModeValue(
    "linear-gradient(180deg, #FBFBFF 0%, #CACAFF 100%)",
    "whiteAlpha.200"
  );
  const brandColor = useColorModeValue("brand.500", "white");
  const buttonBg = useColorModeValue("white", "whiteAlpha.100");
  const gray = useColorModeValue("gray.500", "white");
  const buttonShadow = useColorModeValue(
    "14px 27px 45px rgba(112, 144, 176, 0.2)",
    "none"
  );
  const textColor = useColorModeValue("navy.700", "white");
  const placeholderColor = useColorModeValue(
    { color: "gray.500" },
    { color: "whiteAlpha.600" }
  );
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.aiMessage.messages);
  const hMessage = useSelector((state) => state.humanMessage.message);
  function Stream(updateCallback) {
    let outputCodeLocal = "";
    setInputOnSubmit(inputCode);
    var xhttp = new XMLHttpRequest();
    const abortRequest = () => {
      if (
        xhttp.readyState !== XMLHttpRequest.UNSENT &&
        xhttp.readyState !== XMLHttpRequest.DONE
      ) {
        xhttp.abort();
      }
      setLoading(false);
    };
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4) {
        setLoading(false);
        if (xhttp.status === 200) {
          const last_response_len = xhttp.responseText.length;
          var responseText = xhttp.response.substr(last_response_len);
          const events = xhttp.response
            .split("\r\n\r\n")
            .filter((a) => a !== "");
          events.forEach((event) => {
            const event_list = event.split("\r\n");
            const event_type = event_list[0].split(": ")[1];
            const data = event_list[1] ? event_list[1].split(": ")[1] : null;
            if (event_type === "end") {
              dispatch(addMessage({ message: outputCodeLocal + "\n\n" }));
              setOutputCode((cur) => cur + "\n\n");
              setLoading(false);
              abortRequest();
              return;
            }
            if (event_type === "data") {
              setLoading(true);
              const modifiedData = data.slice(1, -1);
              outputCodeLocal += modifiedData;
              updateCallback(data);
            }
          });
          xhttp = null;
        } else {
          console.error("Erro:", xhttp.status, xhttp.statusText);
        }
      }
    };

    // xhttp.onprogress = function () {
    //   console.log(xhttp.response);
    //   var responseText = xhttp.response.substr(last_response_len);
    //   const events = responseText.split("\r\n\r\n").filter((a) => a !== "");
    //   events.forEach((event) => {
    //     const event_list = event.split("\r\n");
    //     const event_type = event_list[0].split(": ")[1];
    //     const data = event_list[1] ? event_list[1].split(": ")[1] : null;
    //     if (event_type === "end") {
    //       // console.log(outputCodeLocal);
    //       dispatch(addMessage({ message: outputCodeLocal + "\n\n" }));
    //       setOutputCode((cur) => cur + "\n\n");
    //       setLoading(false);
    //       // console.log("End of conversation");
    //       abortRequest();
    //       return;
    //     }
    //     if (event_type === "data") {
    //       setLoading(true);
    //       const modifiedData = data.slice(1, -1);
    //       outputCodeLocal += modifiedData;
    //       updateCallback(data);
    //     }
    //   });
    // };
    xhttp.onerror = function () {
      setLoading(false);
      xhttp.abort();
    };
    xhttp.onabort = function () {
      setLoading(false);
      xhttp.abort();
    };
    xhttp.open("POST", "http://127.0.0.1:8000/rag_conversation/stream", true);
    setLoading(true);
    xhttp.send(
      JSON.stringify({ input: { chat_history: [], question: inputCode } })
    );
  }

  function onUpdate(data) {
    const modifiedData = data.slice(1, -1);
    setOutputCode((cur) => cur + modifiedData);
  }

  useEffect(() => {
    return () => {};
  }, []);

  const handleTranslate = async () => {
    Stream(onUpdate);
  };

  const handleChange = (Event) => {
    setInputCode(Event.target.value);
    dispatch(uptadeMessage(Event.target.value));
  };

  return (
    <Flex
      w="100%"
      pt={{ base: "70px", md: "0px" }}
      direction="column"
      position="relative"
    >
      <Img
        src={Bg.src}
        position={"absolute"}
        w="350px"
        left="50%"
        top="50%"
        transform={"translate(-50%, -50%)"}
      />
      <Flex
        direction="column"
        mx="auto"
        w={{ base: "100%", md: "100%", xl: "100%" }}
        minH={{ base: "75vh", "2xl": "85vh" }}
        maxW="1000px"
      >
        {/* Model Change */}
        <Flex direction={"column"} w="100%" mb={messages ? "20px" : "10px"}>
          <Flex
            mx="auto"
            zIndex="2"
            w="max-content"
            mt="20px"
            borderRadius="60px"
          >
            <Flex
              cursor={"pointer"}
              transition="0.3s"
              justify={"center"}
              align="center"
              bg={model === "gpt-4o" ? buttonBg : "transparent"}
              w="174px"
              h="70px"
              boxShadow={model === "gpt-4o" ? buttonShadow : "none"}
              borderRadius="14px"
              color={textColor}
              fontSize="18px"
              fontWeight={"700"}
              onClick={() => setModel("gpt-4o")}
            >
              <Flex
                borderRadius="full"
                justify="center"
                align="center"
                bg={bgIcon}
                me="10px"
                h="39px"
                w="39px"
              >
                <Icon
                  as={MdAutoAwesome}
                  width="20px"
                  height="20px"
                  color={iconColor}
                />
              </Flex>
              GPT-4o
            </Flex>
            <Flex
              cursor={"pointer"}
              transition="0.3s"
              justify={"center"}
              align="center"
              bg={model === "gpt-3.5-turbo" ? buttonBg : "transparent"}
              w="164px"
              h="70px"
              boxShadow={model === "gpt-3.5-turbo" ? buttonShadow : "none"}
              borderRadius="14px"
              color={textColor}
              fontSize="18px"
              fontWeight={"700"}
              onClick={() => setModel("gpt-3.5-turbo")}
            >
              <Flex
                borderRadius="full"
                justify="center"
                align="center"
                bg={bgIcon}
                me="10px"
                h="39px"
                w="39px"
              >
                <Icon
                  as={MdBolt}
                  width="20px"
                  height="20px"
                  color={iconColor}
                />
              </Flex>
              GPT-3.5
            </Flex>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          w="100%"
          mx="auto"
          display={messages ? "flex" : "none"}
          mb={"auto"}
        >
          <Flex w="100%" align={"center"} mb="10px">
            <Flex
              borderRadius="full"
              justify="center"
              align="center"
              bg={"transparent"}
              border="1px solid"
              borderColor={borderColor}
              me="20px"
              h="40px"
              minH="40px"
              minW="40px"
            >
              <Icon
                as={MdPerson}
                width="20px"
                height="20px"
                color={brandColor}
              />
            </Flex>
            <Flex
              p="22px"
              border="1px solid"
              borderColor={borderColor}
              borderRadius="14px"
              w="100%"
              zIndex={"2"}
            >
              <Text
                color={textColor}
                fontWeight="600"
                fontSize={{ base: "sm", md: "md" }}
                lineHeight={{ base: "24px", md: "26px" }}
              >
                {inputOnSubmit ? inputOnSubmit : hMessage}
              </Text>
              <Icon
                cursor="pointer"
                as={MdEdit}
                ms="auto"
                width="20px"
                height="20px"
                color={gray}
              />
            </Flex>
          </Flex>
          <Flex w="100%">
            <Flex
              borderRadius="full"
              justify="center"
              align="center"
              bg={"linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)"}
              me="20px"
              h="40px"
              minH="40px"
              minW="40px"
            >
              <Icon
                as={MdAutoAwesome}
                width="20px"
                height="20px"
                color="white"
              />
            </Flex>
            <MessageBox
              output={messages.reduce((cum, cur) => cum + cur.message, "")}
            />
          </Flex>
        </Flex>
        {/* Chat Input */}
        <Flex
          ms={{ base: "0px", xl: "60px" }}
          mt="20px"
          justifySelf={"flex-end"}
        >
          <Input
            minH="54px"
            h="100%"
            border="1px solid"
            borderColor={borderColor}
            borderRadius="45px"
            p="15px 20px"
            me="10px"
            fontSize="sm"
            fontWeight="500"
            _focus={{ borderColor: "none" }}
            color={inputColor}
            _placeholder={placeholderColor}
            placeholder="Digite sua dúvida aqui ..."
            onChange={handleChange}
          />
          <Button
            variant="primary"
            py="20px"
            px="16px"
            fontSize="sm"
            borderRadius="45px"
            ms="auto"
            w={{ base: "160px", md: "210px" }}
            h="54px"
            _hover={{
              boxShadow:
                "0px 21px 27px -10px rgba(96, 60, 255, 0.48) !important",
              bg: "linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%) !important",
              _disabled: {
                bg: "linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)",
              },
            }}
            onClick={handleTranslate}
            isLoading={loading ? true : false}
          >
            Enviar
          </Button>
        </Flex>

        <Flex
          justify="center"
          mt="20px"
          direction={{ base: "column", md: "row" }}
          alignItems="center"
        >
          <Text fontSize="xs" textAlign="center" color={gray}>
            Esse chat utiliza da técnica RAG com o GPT, utilizando documentos de
            especialistas em educação física.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ChatBox;
