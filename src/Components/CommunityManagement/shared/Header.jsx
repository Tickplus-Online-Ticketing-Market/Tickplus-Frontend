import React, { Fragment } from "react";
import { Popover, Transition, Menu } from "@headlessui/react";
import { IoNotifications } from "react-icons/io5";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate;

  return (
    <div className="bg-secondary h-20 px-4 flex justify-between items-center border-b border-secondary ">

      <div className="text-3xl font-bold text-primary">Community Page</div>

      <div className="flex item-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-primary",
                  "p-1.5 rounded-full inline-flex item-center text-text hover:text-opacity-100 focus:outline-none active:bg-primary",
                )}
              >
                <IoNotifications fontSize={30} />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-primary border border-primary rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-accent font-sm">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      There is no notification
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-2-background ">
              <div
                className="h-10 w-10 rounded-full bg-background bg-cover bo-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/80x80?face")',
                }}
              >
                <span className="sr-only"> Kulasekara K S T </span>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 shadow-md p-1 bg-background ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-background",
                      "text-text focus:bg-background cursor-pointer rounded-sm px-4 py-2",
                    )}
                    onClick={() => navigate("/profile")}
                  >
                    Your Profile
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-background",
                      "text-text focus:bg-background cursor-pointer rounded-sm px-4 py-2",
                    )}
                    onClick={() => navigate("/setting")}
                  >
                    setting
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-background",
                      "text-text focus:bg-background cursor-pointer rounded-sm px-4 py-2",
                    )}
                    onClick={() => navigate("/logout")}
                  >
                    Logout
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
