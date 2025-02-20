import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'

export default function Example({people,selected, setSelected,supmetFun}) {
  const [query, setQuery] = useState('')
    console.log("selected" , query,selected);
  const filteredPeople =
    query === ''? people : people.filter((person) => {
          return person.data.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <div className="mx-auto h-screen w-52 pt-20 ">
      <Combobox value={selected} onChange={(value) => setSelected(value)} __demoMode>
        <div className="relative">
          <ComboboxInput
            className={clsx(
              'w-full rounded-lg border-none bg-slate-500/20 py-1.5 pr-8 pl-3 text-sm/6 text-black',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
            displayValue={(person) => person?.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
          </ComboboxButton>
        </div>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <ComboboxOptions
            anchor="bottom"
            className="w-[var(--input-width)] rounded-xl border border-white/5 bg-white/25 p-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
          >
            {filteredPeople.map((person) => (
              <ComboboxOption
                key={person.id}
                value={person}
                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
              >
                <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                <div className="text-sm/6 text-black">{person.data.name}</div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Transition>
      </Combobox>
      <button onClick={()=>{supmetFun(selected)}} >supmet</button>
    </div>

  )
}
