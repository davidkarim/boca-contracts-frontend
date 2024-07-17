// EnterAppButton.js
'use client';

import Link from 'next/link'
import { event } from 'nextjs-google-analytics';

const EnterAppButton = ({ app_endpoint }) => {
  const handleClick = () => {
    event("enter_app", {
      category: "button_click",
      label: "Enter App button clicked"
    });
  }

  return (
    <div onClick={handleClick}>
      <Link href={app_endpoint} className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
        Enter App
      </Link>
    </div>
  )
}

export default EnterAppButton