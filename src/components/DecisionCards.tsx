import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";

export type DecisionCard = {
  label: string;
  title: string;
  image?: string;
  problem: string;
  solution: string;
  impact: string;
};

type DesignDecisionCardsProps = {
  cards: DecisionCard[];
};

type DecisionCardItemProps = {
  card: DecisionCard;
  index: number;
  tabs?: ReactNode;
  contentKey?: string;
};

function DecisionCardContent({
  card,
  index,
}: Pick<DecisionCardItemProps, "card" | "index">) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="bg-primary/70 border-2 border-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h4 className="font-bold leading-snug">{card.title}</h4>
      </div>

      {card.image ? (
        <img
          src={card.image}
          alt={card.title}
          className="w-full rounded-xl border-2 border-black object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full aspect-video rounded-xl border-2 border-black bg-gray-100 flex items-center justify-center text-gray-400 font-bold">
          Image / GIF
        </div>
      )}

      <div className="flex flex-col gap-2 text-sm leading-relaxed">
        <div>
          <p className="font-semibold bg-skills-folder w-fit px-2 mb-1">問題</p>
          <p>{card.problem}</p>
        </div>

        <div>
          <p className="font-semibold bg-primary w-fit px-2 mb-1">解法</p>
          <p>{card.solution}</p>
        </div>

        <div>
          <p className="font-semibold bg-accent w-fit px-2 mb-1">影響</p>
          <p>{card.impact}</p>
        </div>
      </div>
    </div>
  );
}

function DecisionCardItem({
  card,
  index,
  tabs,
  contentKey,
}: DecisionCardItemProps) {
  return (
    <div className="mt-2 card-brutal p-4 flex flex-col gap-2 h-full">
      {tabs && <div className="w-full min-w-0">{tabs}</div>}

      {contentKey ? (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={contentKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <DecisionCardContent card={card} index={index} />
          </motion.div>
        </AnimatePresence>
      ) : (
        <DecisionCardContent card={card} index={index} />
      )}
    </div>
  );
}

export default function DesignDecisionCards({
  cards,
}: DesignDecisionCardsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeCard = cards[activeIndex];

  if (!cards.length || !activeCard) return null;

  return (
    <section className="flex flex-col gap-5">
      {/* Tablet / Mobile：Tabs */}
      <div className="lg:hidden">
        <DecisionCardItem
          card={activeCard}
          index={activeIndex}
          contentKey={activeCard.label}
          tabs={
            <div className="flex gap-2 overflow-x-auto pb-1">
              {cards.map((card, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={card.label}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`relative shrink-0 px-4 py-2 rounded-full font-bold text-sm transition-colors ${
                      isActive
                        ? "border-black text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="decision-card-active-tab"
                        className="absolute inset-0 rounded-full bg-black"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 35,
                        }}
                      />
                    )}
                    <span className="relative z-10">{card.label}</span>
                  </button>
                );
              })}
            </div>
          }
        />
      </div>

      {/* Desktop：Cards */}
      <div className="hidden lg:grid grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <DecisionCardItem key={card.label} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
