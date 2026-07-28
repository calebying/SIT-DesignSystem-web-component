export const SitTokensShowcase = () => {
  return (
    <div className="sit:p-2-xl sit:bg-surface-raised sit:rounded-md">
      {/* Header with text tokens */}
      <div className="sit:mb-2-xl">
        <h1 className="sit:text-2 sit:font-semibold sit:text-primary-default sit:mb-xs sit:leading-48">
          Canvas Tailwind Tokens Showcase
        </h1>
        <p className="sit:text-0 sit:text-subtle sit:leading-24">
          This component demonstrates font sizes, colors, spacing, and other utility tokens
        </p>
      </div>

      {/* Content with gap and padding */}
      <div className="sit:flex sit:flex-col sit:gap-lg">
        {/* Card example with typography tokens */}
        <div className="sit:bg-default sit:p-lg sit:border sit:border-surface-border sit:rounded-sm">
          <h2 className="sit:text-1 sit:font-semibold sit:text-heading-default sit:mb-md sit:leading-32">
            Card Title
          </h2>
          <p className="sit:text-body-default sit:leading-28 sit:mb-md">
            This paragraph uses body text color with adjusted line height for readability.
          </p>
          <p className="sit:text-form-subtle sit:leading-24 sit:letter-spacing-normal sit:mb-md">
            Secondary text with subtle form color and normal letter spacing.
          </p>

          {/* Status indicators with semantic colors */}
          <div className="sit:flex sit:gap-md sit:flex-wrap sit:mb-lg">
            <span className="sit:px-md sit:py-sm sit:bg-success-surface-default sit:text-success-emphasis sit:rounded-sm sit:font-semibold sit:text-label-default">
              Success
            </span>
            <span className="sit:px-md sit:py-sm sit:bg-warning-surface-default sit:text-warning-emphasis sit:rounded-sm sit:font-semibold sit:text-label-default">
              Warning
            </span>
            <span className="sit:px-md sit:py-sm sit:bg-danger-surface-default sit:text-danger-emphasis sit:rounded-sm sit:font-semibold sit:text-label-default">
              Danger
            </span>
            <span className="sit:px-md sit:py-sm sit:bg-primary-surface-default sit:text-primary-emphasis sit:rounded-sm sit:font-semibold sit:text-label-default">
              Info
            </span>
          </div>
        </div>

        {/* Text hierarchy example */}
        <div className="sit:space-y-md">
          <div>
            <p className="sit:text-label-default sit:font-semibold sit:text-muted sit:mb-2-xs sit:letter-spacing-tight">
              LABEL
            </p>
            <h3 className="sit:text-display-default sit:font-semibold sit:text-heading-default sit:leading-48">
              Display Heading
            </h3>
          </div>

          <div>
            <p className="sit:text-label-subtle sit:font-regular sit:text-muted sit:mb-2-xs sit:letter-spacing-wide">
              DESCRIPTION
            </p>
            <p className="sit:text-body-default sit:leading-32 sit:text-subtle">
              Body text with wide letter spacing for emphasis on secondary content with adequate line height.
            </p>
          </div>
        </div>

        {/* Opacity example */}
        <div className="sit:flex sit:gap-md sit:items-center">
          <div className="sit:w-16 sit:h-16 sit:bg-primary-default sit:opacity-100 sit:rounded-sm"></div>
          <div className="sit:w-16 sit:h-16 sit:bg-primary-default sit:opacity-60 sit:rounded-sm"></div>
          <div className="sit:w-16 sit:h-16 sit:bg-primary-default sit:opacity-30 sit:rounded-sm"></div>
          <div className="sit:w-16 sit:h-16 sit:bg-primary-default sit:opacity-5 sit:rounded-sm"></div>
          <p className="sit:text-muted sit:text-0 sit:leading-20">Varying opacity levels</p>
        </div>

        {/* Grid with gap tokens showcase */}
        <div>
          <p className="sit:text-label-default sit:font-semibold sit:text-muted sit:mb-md sit:letter-spacing-tight">
            SPACING TOKENS
          </p>
          <div className="sit:grid sit:grid-cols-4 sit:gap-lg">
            <div className="sit:bg-accent-surface-default sit:h-20 sit:rounded-sm sit:flex sit:items-center sit:justify-center sit:text-accent-emphasis sit:font-semibold sit:text-0">
              gap-lg
            </div>
            <div className="sit:bg-cyan-surface-default sit:h-20 sit:rounded-sm sit:flex sit:items-center sit:justify-center sit:text-cyan-emphasis sit:font-semibold sit:text-0">
              gap-lg
            </div>
            <div className="sit:bg-purple-surface-default sit:h-20 sit:rounded-sm sit:flex sit:items-center sit:justify-center sit:text-purple-emphasis sit:font-semibold sit:text-0">
              gap-lg
            </div>
            <div className="sit:bg-neutral-surface-default sit:h-20 sit:rounded-sm sit:flex sit:items-center sit:justify-center sit:text-neutral-emphasis sit:font-semibold sit:text-0">
              gap-lg
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
