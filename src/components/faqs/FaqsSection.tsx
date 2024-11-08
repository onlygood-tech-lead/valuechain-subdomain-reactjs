import { FaqsArray } from "../../constants/FaqConstants";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import MarkdownRenderer from "../markdown/MarkdownRenderer";

export default function FaqsSection() {
  return (
    <div className="space-y-2 px-4">
      <h5 className="text-3xl font-medium">Frequently asked questions</h5>

      {FaqsArray.map(({ question, answer }, index) => (
        <Disclosure
          as="div"
          className="py-4 w-full"
          key={index}
          defaultOpen={false}
        >
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/2 font-semibold text-slate-700 group-data-[hover]:text-slate-800 text-left">
              {question}
            </span>
            <ChevronDownIcon className="size-5 fill-gray/40 group-data-[hover]:fill-gray/40 group-data-[open]:rotate-180 flex-shrink-0" />
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
          >
            <MarkdownRenderer
              content={answer}
              className="mt-2 text-sm/6 text-slate-700"
            />
          </DisclosurePanel>
        </Disclosure>
      ))}
    </div>
  );
}
