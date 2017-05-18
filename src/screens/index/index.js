import React from 'react'

export default function Index({children}) {
  return (
    <div>
      {children}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
      <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  )
}
