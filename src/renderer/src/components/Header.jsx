import React from 'react'

export default function Header({ setNavegation, navegation }) {
  return (
    <header className="w-full h-20 flex items-center justify-around bg-emerald-400 shadow-xl sticky top-0 z-50">
      <h1 className="font-black text-3xl text-white">Falcon Group</h1>
      <h1
        className="font-bold text-xl p-2 bg-emerald-300 transition-all shadow-2xl rounded-md hover:py-3 hover:text-2xl "
        onClick={() => {
          setNavegation({ ...navegation, page: 0 })
        }}
      >
        عملية
      </h1>
      <h1
        className="font-bold text-xl p-2 bg-emerald-300 transition-all shadow-2xl rounded-md hover:py-3 hover:text-2xl "
        onClick={() => {
          setNavegation({ ...navegation, page: 1 })
        }}
      >
        مندوب
      </h1>
      <h1
        className="font-bold text-xl p-2 bg-emerald-300 transition-all shadow-2xl rounded-md hover:py-3 hover:text-2xl "
        onClick={() => {
          setNavegation({ ...navegation, page: 2 })
        }}
      >
        منتجات
      </h1>
      <h1
        className="font-bold text-xl p-2 bg-emerald-300 transition-all shadow-2xl rounded-md hover:py-3 hover:text-2xl "
        onClick={() => {
          setNavegation({ ...navegation, page: 3 })
        }}
      >
        مخزن
      </h1>
    </header>
  )
}
