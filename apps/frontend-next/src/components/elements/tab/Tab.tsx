"use client";
import { useState } from "react";

const tabs = [
  { name: "My Account", href: "#", current: false },
  { name: "Company", href: "#", current: false },
  { name: "Team Members", href: "#", current: true },
  { name: "Billing", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  tabs: {
    name: string;
    content: JSX.Element;
  }[];
};

/**
 * @param props
 * @returns
 */
export function PageTabs(props: Props) {
  const [currentTab, setCurrentTab] = useState(props.tabs[0].name);
  const handleClick = (name: string) => {
    setCurrentTab(name);
  };

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          defaultValue={currentTab}
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav aria-label="Tabs" className="flex space-x-4">
          {props.tabs.map((tab) => (
            <div
              key={tab.name}
              aria-current={tab.name === currentTab ? "page" : undefined}
              onClick={() => handleClick(tab.name)}
              className={classNames(
                tab.name === currentTab
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-500 hover:text-gray-700",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
            >
              {tab.name}
            </div>
          ))}
        </nav>
      </div>
      {/* contents */}
      {props.tabs.map((tab) => (
        <div
          key={tab.name}
          className={classNames(
            tab.name === currentTab ? "block" : "hidden",
            "mt-6"
          )}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
