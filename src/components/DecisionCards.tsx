import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import ImagePreviewModal from "./ImagePreviewModal";
import Icon from "../components/Icon";

export type DecisionCard = {
  label: string;
  title: string;
  image?: string;
  imageAspectRatio?: string;
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
  onPreviewImage: (image: PreviewImage) => void;
};

type PreviewImage = {
  src: string;
  alt: string;
  description?: string;
};

function DecisionCardContent({
  card,
  onPreviewImage,
}: Pick<DecisionCardItemProps, "card" | "index" | "onPreviewImage">) {
  const cardImage = card.image?.trim();
  const [loadedImage, setLoadedImage] = useState<string | null>(null);
  const isImageLoaded = loadedImage === cardImage;
  const hasImageAspectRatio = Boolean(card.imageAspectRatio);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 pb-2">
        <Icon name="deco_star" className="w-5 h-5" />
        <h4 className="font-bold text-lg leading-snug">{card.title}</h4>
      </div>

      {cardImage && (
        <button
          type="button"
          className="group relative mb-2 w-full overflow-hidden rounded-xl bg-gray-100 text-left shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary/60"
          style={
            card.imageAspectRatio
              ? { aspectRatio: card.imageAspectRatio }
              : undefined
          }
          aria-label={`預覽圖片：${card.title}`}
          onClick={() =>
            onPreviewImage({
              src: cardImage,
              alt: card.title,
              description: card.title,
            })
          }
        >
          <img
            src={cardImage}
            alt={card.title}
            crossOrigin="anonymous"
            className={`w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.01] group-hover:brightness-95 ${
              hasImageAspectRatio ? "h-full" : ""
            } ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
            loading="lazy"
            onLoad={() => setLoadedImage(cardImage)}
            onError={() => setLoadedImage(cardImage)}
          />
          {!isImageLoaded && (
            <div className="absolute inset-0 animate-pulse rounded-xl bg-linear-to-r from-gray-100 via-gray-200 to-gray-100" />
          )}
        </button>
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
  onPreviewImage,
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
            <DecisionCardContent
              card={card}
              index={index}
              onPreviewImage={onPreviewImage}
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <DecisionCardContent
          card={card}
          index={index}
          onPreviewImage={onPreviewImage}
        />
      )}
    </div>
  );
}

export default function DesignDecisionCards({
  cards,
}: DesignDecisionCardsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [previewImage, setPreviewImage] = useState<PreviewImage | null>(null);
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
          onPreviewImage={setPreviewImage}
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
          <DecisionCardItem
            key={card.label}
            card={card}
            index={index}
            onPreviewImage={setPreviewImage}
          />
        ))}
      </div>
      <ImagePreviewModal
        image={previewImage}
        onClose={() => setPreviewImage(null)}
      />
    </section>
  );
}
