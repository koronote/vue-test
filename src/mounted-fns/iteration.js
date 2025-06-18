/**
 * Get cached array of elements to avoid repeated Array.from() calls
 * @private
 */
function getElementsArray() {
  if (!this._elementsCache) {
    this._elementsCache = Array.from(this._el);
  }
  return this._elementsCache;
}

/**
 * Equivalent to array.forEach().
 *
 * @param {function} cb A predicate function.
 * @returns {MountedComponent} self.
 */
export function each(cb) {
  const elements = getElementsArray.call(this);
  elements.forEach((el, i) => {
    const elMount = this._newFromThis(el);
    cb.call(elMount, i, elMount);
  });

  return this;
}

/**
 * Equivalent to array.map().
 *
 * @param {function} cb A predicate function.
 * @returns {Array} Array of values returned by predicate function.
 */
export function map(cb) {
  const elements = getElementsArray.call(this);
  return elements.map((el, i) => {
    const elMount = this._newFromThis(el);
    return cb.call(elMount, i, elMount);
  });
}

/**
 * Equivalent to array.some().
 *
 * @param {function} cb A predicate function.
 * @returns {boolean} True if predicate function returns true at least once.
 */
export function some(cb) {
  const elements = getElementsArray.call(this);
  return elements.some((el, i) => {
    const elMount = this._newFromThis(el);
    return cb.call(elMount, i, elMount);
  });
}

/**
 * Equivalent to array.every().
 *
 * @param {function} cb A predicate function.
 * @returns {boolean} True if predicate function returns true every time.
 */
export function every(cb) {
  const elements = getElementsArray.call(this);
  return elements.every((el, i) => {
    const elMount = this._newFromThis(el);
    return cb.call(elMount, i, elMount);
  });
}
