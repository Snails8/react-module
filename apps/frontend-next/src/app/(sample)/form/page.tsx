import { PageTabs } from "@/components/elements/tab/Tab"

export default function Page() {
  const tabs = [
    { name: 'Control Form',  content: <></> },
    { name: 'UnControl Form',  content: <></>  },
    { name: 'RHF',  content: <></>  },
  ]

  return (
    <>
      <PageTabs
        tabs={tabs}
      />
    </>
  )
}

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/