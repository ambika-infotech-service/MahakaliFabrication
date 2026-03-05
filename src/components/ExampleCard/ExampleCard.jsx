/**
 * Example Component Using SCSS Theme Variables
 *
 * This file demonstrates the proper way to structure component SCSS
 * with centralized theme variables and mixins.
 *
 * To use this example:
 * 1. Create a new component folder: src/components/ExampleCard/
 * 2. Create ExampleCard.jsx and ExampleCard.scss
 * 3. Copy the patterns from this file
 */

import './ExampleCard.scss'

export function ExampleCard() {
  return (
    <div className="example-card">
      <div className="example-card__header">
        <h3 className="example-card__title">Example Card</h3>
        <span className="example-card__badge">Featured</span>
      </div>

      <p className="example-card__description">
        This is an example of using SCSS with centralized theme variables
        and mixins for consistent, maintainable styling.
      </p>

      <div className="example-card__actions">
        <button className="btn btn-primary">Learn More</button>
        <button className="btn btn-secondary">Explore</button>
      </div>
    </div>
  )
}
