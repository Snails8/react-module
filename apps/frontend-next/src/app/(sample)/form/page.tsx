import { PageTabs } from "@/components/elements/tab/Tab"
import { ControlForm } from "./_components/ContorolForm"
import { UnControlForm } from "./_components/UnControlForm"

export default function Page() {
  const tabs = [
    { name: 'Control Form',  content: <ControlForm /> },
    { name: 'UnControl Form',  content: <UnControlForm />  },
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