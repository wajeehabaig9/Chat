import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  const [activeTab, setActiveTab] = useState("Messages");
  const [isFocused, setIsFocused] = useState(false);
  const [inputText, setInputText] = useState('');

  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible4, setIsModalVisible4] = useState(false);

  // Functions to open each specific modal
  const openModal1 = () => setIsModalVisible1(true);
  const openModal2 = () => setIsModalVisible2(true);
  const openModal3 = () => setIsModalVisible3(true);
  const openModal4 = () => setIsModalVisible4(true);

  // Functions to close each specific modal
  const closeModal1 = () => setIsModalVisible1(false);
  const closeModal2 = () => setIsModalVisible2(false);
  const closeModal3 = () => setIsModalVisible3(false);
  const closeModal4 = () => setIsModalVisible4(false);

  return (
    <SafeAreaView className="bg-white h-full p-2">
      <ScrollView>
        <View>
          {/* Chat and New Group Section (Top) */}
          <View className="flex-row items-center justify-between mt-2 mb-2">
            <Text className="font-black text-[12px]">CHAT</Text>
            <View className="flex-row items-center gap-2 mt-1">
              <Text className="font-normal text-[8px]">New group</Text>
              <Image source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741720438/image_70_s3swgb.png" }} className="w-[23px] h-[26px]" resizeMode="contain" />
            </View>
          </View>

          {/* Tab Selection Section */}
          <View className="flex-1 bg-white">
            <View className="flex-row justify-between mb-4">
              {["Messages", "Groups", "Events"].map((tab) => (
                <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} className="items-center">
                  <Text className="font-extrabold text-[11px] leading-[150%] tracking-[0px] text-center font-['Inter'] mb-1">{tab}</Text>
                  <View className={`w-[110px] h-[5px] rounded-[5px] mt-1 ${activeTab === tab ? "bg-green-900" : "bg-[#D9D9D9]"}`} />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Tab Content (Groups, Events) */}
          {activeTab === "Groups" && (
            <View>
          
              <View className="relative mb-4">
                <TextInput placeholder="Search" placeholderTextColor="#979797" className="w-full border border-[#D9D9D9] rounded-md px-4 py-2 text-[#979797] font-semibold" />
                <Image source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740247697/search_1_ne6xig.png" }} className="absolute right-3 top-2 -translate-y-1/2 w-[26px] h-[31px]" resizeMode="contain" />
              </View>
              <View className="mt-2">
      {[
        { name: "Dala Community", uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741720847/Group_8601_c4ogdy.png", message: "Farming communities for prosperity", time: "12:25PM", onPress: openModal1 },
        { name: "Kwetu Community", uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741720847/Group_8602_syxl7u.png", message: "Agri-Biz Development", time: "2:14PM", onPress: openModal2 },
        { name: "Wanyumba Association", uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741720847/Group_8605_wghwdd.png", message: "Sustainable Farming", time: "4:30PM", onPress: openModal3 },
        { name: "Mifugo Group", uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741720847/Group_8606_jafgaf.png", message: "Quality livestock & Market acess", time: "5:00PM", onPress: openModal4 },
      ].map((chat, index) => (
        <TouchableOpacity key={index} onPress={chat.onPress}>
          <View className="mb-2">
            <View className="flex-row items-center justify-between border-b-[2px] border-t-[0.5px] border-l-[0.2px] border-r-[0.5px] rounded-bl-lg rounded-br-lg border-[#D9D9D9] py-3 px-1">
              <View className="flex-row items-center space-x-2">
                {/* Image */}
                <Image
                  source={{ uri: chat.uri }}  
                  className="w-[40px] h-[40px] rounded-full border border-gray-300"
                  resizeMode="cover"
                />
                <View className="w-[280px]">
                  {/* Name */}
                  <View className="flex-row items-center justify-between">
                    <Text className="text-[12px] font-black">{chat.name}</Text>
                    <View className="w-[15px] h-[15px] rounded-full bg-red-500 justify-center items-center mb-1">
                      <Text className="text-white text-[8px] font-semibold">{index + 1}</Text>
                    </View>
                  </View>
                  {/* Message */}
                  <View className="flex-row items-center justify-between space-x-2">
                    <Text className="text-[9px] font-normal">{chat.message}</Text>
                    {/* Time */}
                    <Text className="text-[8px] font-normal">{chat.time}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}

 
    </View>
            </View>
          )}

          {activeTab === "Events" && (
            <View>
              <View className="flex-row items-center justify-between mt-2 mb-3 pr-2">
                <Text className="font-black text-[14px]">EVENTS</Text>
              </View>
              <View className="relative mb-4">
                <TextInput placeholder="Search" placeholderTextColor="#979797" className="w-full border border-[#D9D9D9] rounded-md px-4 py-2 text-[#979797] font-semibold" />
                <Image source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740247697/search_1_ne6xig.png" }} className="absolute right-3 top-2 -translate-y-1/2 w-[26px] h-[31px]" resizeMode="contain" />
              </View>
            </View>
          )}

          {/* User Images Section (Only for Messages Tab) */}
          {activeTab === "Messages" && (
            <View>
              <View className="flex-row justify-start mt-4 space-x-1">
                {[
                  { name: "New Chat", uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741720847/image_1092_qfitoj.png",  },
                  { name: "Juma Jembe", uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741720847/Group_8601_c4ogdy.png",  },
                  { name: "Mary Jane", uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741720847/Group_8602_syxl7u.png",  },
                  { name: "George Ben", uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741720847/Group_8605_wghwdd.png", },
                  { name: "Khumalo Sizwe", uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741720847/Group_8606_jafgaf.png",  },
                ].map((item, index) => (
                  <View key={index} className="relative items-center">
                    {/* Green Circle */}
                    {index !== 0 && (
                      <View
                        className="absolute w-[18px] h-[18px] rounded-full"
                        style={{
                          top: -5,
                          left: 2,
                          zIndex: 1,
                          backgroundColor: index === 4 ? "#D9D9D9" : "#114918", // Change color for the last image
                        }}
                      />
                    )}
                    {/* Image */}
                    <Image
                      source={{ uri: item.uri }}
                      className={`w-[45px] h-[45px] ${index !== 0 ? "border-[3px] border-gray-300" : ""}`}
                      resizeMode="cover"
                    />
                    <Text className="text-center font-['Inter'] text-[8px] font-normal w-[57px] mt-1">{item.name}</Text>
                  </View>
                ))}
              </View>

              <View className="relative w-full h-[45px] mt-4">
                <TextInput
                  className="pl-2 pr-1 text-[7px] font-semibold text-left border border-[#D1D5DB] rounded-[5px]"
                  placeholderTextColor="#A1A1A1"
                  value={inputText}
                  onChangeText={setInputText}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />

                <View className={`absolute left-3 top-[40%] transform -translate-y-[10px] flex-row items-center ${inputText || isFocused ? 'opacity-0' : 'opacity-100'}`}>
                  <Text className="font-semibold text-[10px] text-[#979797]">Search </Text>
                  <Text className="font-black text-[10px] text-[#19253C]">{'Agronomist'}</Text>
                </View>

                <Image
                  source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740247697/search_1_ne6xig.png" }}
                  className="absolute right-5 top-[45%] transform -translate-y-[10px] w-[18px] h-[20px]"
                />
              </View>

              <View className="mt-4">
      {[
        { name: "Juma Jembe", uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741720847/Group_8601_c4ogdy.png", message: "Hello, looking for farming guide", time: "12:25PM", onPress: openModal1 },
        { name: "Mary Jane", uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741720847/Group_8602_syxl7u.png", message: "Where can I find a good Vet?", time: "2:14PM", onPress: openModal2 },
        { name: "George Ben", uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741720847/Group_8605_wghwdd.png", message: "Was the payment done?", time: "4:30PM", onPress: openModal3 },
        { name: "Khumalo Sizwe", uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741720847/Group_8606_jafgaf.png", message: "Please send the invoice", time: "5:00PM", onPress: openModal4 },
      ].map((chat, index) => (
        <TouchableOpacity key={index} onPress={chat.onPress}>
          <View className="mb-2">
            <View className="flex-row items-center justify-between border-b-[2px] border-t-[0.5px] border-l-[0.2px] border-r-[0.5px] rounded-bl-lg rounded-br-lg border-[#D9D9D9] py-3 px-1">
              <View className="flex-row items-center space-x-2">
                {/* Image */}
                <Image
                  source={{ uri: chat.uri }}  
                  className="w-[40px] h-[40px] rounded-full border border-gray-300"
                  resizeMode="cover"
                />
                <View className="w-[280px]">
                  {/* Name */}
                  <View className="flex-row items-center justify-between">
                    <Text className="text-[12px] font-black">{chat.name}</Text>
                    <View className="w-[15px] h-[15px] rounded-full bg-red-500 justify-center items-center mb-1">
                      <Text className="text-white text-[8px] font-semibold">{index + 1}</Text>
                    </View>
                  </View>
                  {/* Message */}
                  <View className="flex-row items-center justify-between space-x-2">
                    <Text className="text-[9px] font-normal">{chat.message}</Text>
                    {/* Time */}
                    <Text className="text-[8px] font-normal">{chat.time}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}

 
    </View>

<View>
<Image
  source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741724382/Screenshot_2025-03-12_at_1.19.49_AM_ui3aht.png" }}
  className=" w-[50px] h-[50px] mt-1"
                />
</View>
<Modal visible={isModalVisible1} animationType="slide" transparent={false}>
<ScrollView>
    {/* Back Button */}
    <TouchableOpacity onPress={closeModal1} className="mt-1 px-3">
    <Text className="text-black">Back</Text>
  </TouchableOpacity>
<View className="px-3 py-5">
  {/* Modal Header - Date */}
  <Text className="font-black text-[12px]">Wednesday 13th March 2024</Text>
  
  <View className="mt-4">
    {/* Chat List */}
    {[
      {
        name: "Juma Jembe",
        uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741720847/Group_8601_c4ogdy.png",
        message: "Just Hustlin",
        time: "12:25PM",
      },
    ].map((chat, index) => (
      <TouchableOpacity key={index} onPress={chat.onPress}>
        <View className="mb-4">
          {/* Chat Item */}
          <View className="flex-row items-center justify-between border-b-[2px] border-t-[0.5px] border-l-[0.2px] border-r-[0.5px] rounded-bl-lg rounded-br-lg border-[#D9D9D9] py-3 px-1">
            {/* User Image */}
            <View className="flex-row items-center space-x-2">
              <Image
                source={{ uri: chat.uri }}
                className="w-[40px] h-[40px] rounded-full border border-gray-300"
                resizeMode="cover"
              />
              {/* Chat Details */}
              <View className="w-[280px]">
                {/* Name & Badge */}
                <View className="flex-row items-center justify-between">
                  <Text className="text-[12px] font-black">{chat.name}</Text>
                  <View className="w-[15px] h-[15px] rounded-full bg-red-500 justify-center items-center mb-1">
                    <Text className="text-white text-[8px] font-semibold">{index + 1}</Text>
                  </View>
                </View>
                {/* Message and Time */}
                <View className="flex-row items-center justify-between space-x-2">
                  <View>
                    <Text className="text-[8px] font-normal">{chat.message}</Text>
                    <Text className="text-[6px] font-normal">FNKEAD0000006</Text>
                  </View>
                  <Text className="text-[8px] font-normal">{chat.time}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ))}
  </View>

  <View className="pl-2 mt-4">
    <View className="h-[80] w-full bg-[#F3F3F3] rounded-tr-xl rounded-br-xl rounded-bl-xl ">
      {/* Right side image */}
      <View className="flex-row justify-end pr-3 mt-2">
        <Image
          source={{
            uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.07_AM_corpqz.png",
          }}
          className="w-[21px] h-[16px]"
        />
      </View>
      {/* Left side paragraph */}
      <View className="ml-3 flex-1">
        <Text className="font-normal text-[10px] text-black -mt-3">
          Hello, Am looking for DAP fertilizer? Do you have some? See my farm test report attached.
        </Text>
      </View>
      
      {/* Bottom-right time */}
      <View className="flex-row justify-end pr-3 mb-2">
        <Text className="text-[10px] font-normal">12:30PM</Text>
      </View>
    </View>
  </View>

  {/* Right Side Images Section */}
  <View className="mt-6">
    <View className="flex-row justify-end items-center">
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.12_AM_aivzbq.png",
        }}
        className="w-[30px] h-[30px]"
      />
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.16_AM_oljdgk.png",
        }}
        className="w-[30px] h-[30px]"
      />
    </View>
    <View className="flex-row justify-end mt-4">
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741728383/Screenshot_2025-03-12_at_2.26.31_AM_qnvw53.png",
        }}
        className="w-[30px] h-[8px]"
      />
    </View>
    <View className="flex-row justify-end mt-4">
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741729003/Screenshot_2025-03-12_at_2.36.49_AM_g4tmis.png",
        }}
        className="w-[75px] h-[60px]"
      />
    </View>
  </View>
  <View className="flex-row justify-end items-center">
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.12_AM_aivzbq.png",
        }}
        className="w-[30px] h-[30px]"
      />
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.16_AM_oljdgk.png",
        }}
        className="w-[30px] h-[30px]"
      />
    </View>
  <View className="pl-2 mt-2 ml-7">
    <View className="h-[80] w-[300px] bg-[#F3F3F3] rounded-tr-xl rounded-br-xl rounded-bl-xl ">
    <View className="flex-row justify-end pr-3 mt-2">
        <Image
          source={{
            uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.07_AM_corpqz.png",
          }}
          className="w-[21px] h-[16px]"
        />
      </View>
      {/* Left side paragraph */}
      <View className="ml-3 flex-1">
        <Text className="font-normal text-[10px] text-black w-[200px] -mt-3">
        We have Panda variety of DAP. See picture below.
        </Text>
      </View>
      
      {/* Bottom-right time */}
      <View className="flex-row justify-end pr-3 mb-2">
        <Text className="text-[10px] font-normal">12:30PM</Text>
      </View>
    </View>
  </View>

  <View>
    <View className="flex-row justify-end items-center">
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.12_AM_aivzbq.png",
        }}
        className="w-[30px] h-[30px]"
      />
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.16_AM_oljdgk.png",
        }}
        className="w-[30px] h-[30px]"
      />
    </View>
    <View className="flex-row justify-end mt-4">
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741728383/Screenshot_2025-03-12_at_2.26.31_AM_qnvw53.png",
        }}
        className="w-[30px] h-[8px]"
      />
    </View>
    <View className="flex-row justify-end mt-4">
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.35_AM_uddtz5.png",
        }}
        className="w-[120px] h-[80px]"
      />
    </View>
  </View>
  <View className="flex-row justify-end items-center">
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.12_AM_aivzbq.png",
        }}
        className="w-[30px] h-[30px]"
      />
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.16_AM_oljdgk.png",
        }}
        className="w-[30px] h-[30px]"
      />
    </View>
    <View className="pl-2 mt-2 ml-2">
    <View className="h-[80] w-[320px] bg-[#F3F3F3] rounded-tr-xl rounded-br-xl rounded-bl-xl ">
    <View className="flex-row justify-end pr-3 mt-2">
        <Image
          source={{
            uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.07_AM_corpqz.png",
          }}
          className="w-[21px] h-[16px]"
        />
      </View>
      {/* Left side paragraph */}
      <View className="ml-3 flex-1">
        <Text className="font-normal text-[10px] text-black  -mt-3">
        How much does it cost? Send me invoice
        </Text>
      </View>
      
      {/* Bottom-right time */}
      <View className="flex-row justify-end pr-3 mb-2">
        <Text className="text-[10px] font-normal">12:30PM</Text>
      </View>
    </View>
  </View>
  <View className="flex-row justify-end items-center">
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.12_AM_aivzbq.png",
        }}
        className="w-[30px] h-[30px]"
      />
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.16_AM_oljdgk.png",
        }}
        className="w-[30px] h-[30px]"
      />
    </View>
   
    <View className="pl-2 mt-2 ml-7">
    <View className="h-[80] w-[300px] bg-[#F3F3F3] rounded-tr-xl rounded-br-xl rounded-bl-xl ">
    <View className="flex-row justify-end pr-3 mt-2">
        <Image
          source={{
            uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.07_AM_corpqz.png",
          }}
          className="w-[21px] h-[16px]"
        />
      </View>
      {/* Left side paragraph */}
      <View className="ml-3 flex-1">
        <Text className="font-normal text-[10px] text-black  -mt-3">
        Here is the Invoice
        </Text>
      </View>
      
      {/* Bottom-right time */}
      <View className="flex-row justify-end pr-3 mb-2">
        <Text className="text-[10px] font-normal">12:30PM</Text>
      </View>
    </View>
  </View>

    <View>
    <View className="flex-row justify-end items-center">
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.12_AM_aivzbq.png",
        }}
        className="w-[30px] h-[30px]"
      />
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.16_AM_oljdgk.png",
        }}
        className="w-[30px] h-[30px]"
      />
    </View>
    <View className="flex-row justify-end mt-4">
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741728383/Screenshot_2025-03-12_at_2.26.31_AM_qnvw53.png",
        }}
        className="w-[30px] h-[8px]"
      />
    </View>
    <View className="flex-row justify-end mt-4">
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.39_AM_ujfuu9.png",
        }}
        className="w-[100px] h-[150px]"
      />
    </View>
    <View className="flex-row justify-end items-center">
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.12_AM_aivzbq.png",
        }}
        className="w-[30px] h-[30px]"
      />
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741727398/Screenshot_2025-03-12_at_2.09.16_AM_oljdgk.png",
        }}
        className="w-[30px] h-[30px]"
      />
    </View>
    <View className="w-full h-[60px] rounded-md bg-[#F3F3F3] mt-1 flex-row items-center space-x-2 px-2">
<View className="bg-white w-[30px] h-[30px] rounded-full items-center justify-center ">
<Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741730754/Screenshot_2025-03-12_at_3.05.56_AM_ybkeeu.png",
        }}
        className="w-[20px] h-[20px]"
      /> 
</View>
<TextInput placeholder="Type message ..." placeholderTextColor="black" className="w-[200px] text-[12px] text-black font-semibold" />
<View className="flex-row justify-end items-center  space-x-3">
      <Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741731219/Screenshot_2025-03-12_at_3.13.33_AM_uoqt9n.png",
        }}
        className="w-[30px] h-[30px]"
      />
    <View className="bg-white w-[30px] h-[30px] rounded-full items-center justify-center ">
<Image
        source={{
          uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741731219/Screenshot_2025-03-12_at_3.13.39_AM_fujx90.png",
        }}
        className="w-[20px] h-[20px]"
      /> 
</View>
    </View>
    </View>
  </View>

</View>
</ScrollView>


</Modal>


      {/* Modal 2 */}
      <Modal visible={isModalVisible2} animationType="slide" transparent={false}>
        <View className="flex-1 justify-center items-center bg-white p-4">
          <View className="w-full h-full justify-center items-center">
            <Text className="text-2xl font-bold">Modal 2 - Mary Jane</Text>
            <Text className="mt-4 text-lg">Content for Modal 2 goes here.</Text>
            <TouchableOpacity onPress={closeModal2} className="mt-8 bg-red-500 p-2 rounded-full">
              <Text className="text-white">Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal 3 */}
      <Modal visible={isModalVisible3} animationType="slide" transparent={false}>
        <View className="flex-1 justify-center items-center bg-white p-4">
          <View className="w-full h-full justify-center items-center">
            <Text className="text-2xl font-bold">Modal 3 - George Ben</Text>
            <Text className="mt-4 text-lg">Content for Modal 3 goes here.</Text>
            <TouchableOpacity onPress={closeModal3} className="mt-8 bg-red-500 p-2 rounded-full">
              <Text className="text-white">Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal 4 */}
      <Modal visible={isModalVisible4} animationType="slide" transparent={false}>
        <View className="flex-1 justify-center items-center bg-white p-4">
          <View className="w-full h-full justify-center items-center">
            <Text className="text-2xl font-bold">Modal 4 - Khumalo Sizwe</Text>
            <Text className="mt-4 text-lg">Content for Modal 4 goes here.</Text>
            <TouchableOpacity onPress={closeModal4} className="mt-8 bg-red-500 p-2 rounded-full">
              <Text className="text-white">Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>



            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
