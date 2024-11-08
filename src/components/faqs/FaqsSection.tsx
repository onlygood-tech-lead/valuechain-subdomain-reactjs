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
    <div className="space-y-2 px-2 sm:px-4">
      <h5 className="text-2xl sm:text-4xl font-medium">
        Frequently asked questions
      </h5>

      <div className="w-full divide-y divide-dashed">
        {FaqsArray.map(({ question, answer }, index) => (
          <Disclosure
            as="div"
            className="py-4 w-full"
            key={index}
            defaultOpen={false}
          >
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-base sm:text-lg font-semibold text-slate-800 group-data-[hover]:text-slate-800 text-left">
                {question}
              </span>
              <ChevronDownIcon className="size-5 fill-gray/40 group-data-[hover]:fill-gray/40 group-data-[open]:rotate-180 flex-shrink-0 transition-transform" />
            </DisclosureButton>
            <DisclosurePanel
              transition
              className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
            >
              <MarkdownRenderer
                content={answer}
                className="mt-2 text-sm sm:text-base text-slate-500"
              />
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
