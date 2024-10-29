import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";

import React from "react";

import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";

const Header = () => {
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border pl-11 border-gray-300 rounded-sm px-4"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          <PopoverButton className="p-1.5 rounded-sm inline-flex items-center hover:text-opacity-100  active:bg-gray-100 text-sm/6 font-semibold text-black focus:outline-none data-[active]:text-black data-[hover]:text-gray data-[focus]:outline-1 data-[focus]:outline-white">
            <HiOutlineChatAlt fontSize={24} />
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y absolute  z-10 mt-4 right-0 mr-2 w-80 rounded-s-md bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="shadow-md ring-1 ring-black ring-opacity-5 p-2.5">
              <strong className="text-gray-700 font-medium">Message</strong>
              <div className="mt-2 py-1 text-sm">This is message panel...</div>
            </div>
          </PopoverPanel>
        </Popover>
        <Popover className="relative">
          <PopoverButton className="p-1.5 rounded-sm inline-flex items-center hover:text-opacity-100  active:bg-gray-100 text-sm/6 font-semibold text-black focus:outline-none data-[active]:text-black data-[hover]:text-gray data-[focus]:outline-1 data-[focus]:outline-white">
            <HiOutlineBell fontSize={24} />
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y absolute  z-10 mt-4 right-0 mr-2 w-80 rounded-s-md bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="shadow-md ring-1 ring-black ring-opacity-5 p-2.5">
              <strong className="text-gray-700 font-medium">
                Notification
              </strong>
              <div className="mt-2 py-1 text-sm">
                This is Notification panel...
              </div>
            </div>
          </PopoverPanel>
        </Popover>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex items-center  rounded-full h-10 w-10 bg-sky-500 bg-cover bg-no-repeat bg-center  text-sm/6 font-semibold text-white  shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
              <div
                className="h-10 w-10 rounded-full bg-sky-500 border-none bg-cover hover:border-red-300 border-gray-700 bg-no-repeat bg-center"
                style={{ backgroundImage: 'url("../main.jpg")' }}
              >
                <span className="sr-only">Ragul R</span>
              </div>
            </MenuButton>
          </div>
          <MenuButton className="inline-flex items-center  rounded-full h-10 w-10 bg-sky-500 bg-cover bg-no-repeat bg-center  text-sm/6 font-semibold text-white  shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            <div
              className="h-10 w-10 rounded-full bg-sky-500 border-none bg-cover hover:border-red-300 border-gray-700 bg-no-repeat bg-center"
              style={{ backgroundImage: 'url("../main.jpg")' }}
            >
              <span className="sr-only">Ragul R</span>
            </div>
          </MenuButton>
        </Menu>
      </div>
    </div>
  );
};

export default Header;

// #4 30:56
