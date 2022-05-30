export function shouldDisplay(item) {
  return (
    (item.visible === undefined || item.visible === true) &&
    (this?.isFullVersion ||
      item.shortVersion === undefined ||
      item.shortVersion === true)
  )
}

export function formatDate(dateObj, onlyYear) {
  const month = !onlyYear && dateObj?.month?.toUpperCase()
  return `${month ? month : ""} ${dateObj.year}`
}

export function formatLocal(localObj) {
  if (localObj.online) {
    return `${localObj.online}`
  }
  return `${localObj.city}, ${localObj.state} ${localObj.country}`
}
