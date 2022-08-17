type prop = {
  array1: string[]
  content: Element
}

const ArrayMergeAssoc = ({title, content}) => {

  let results = []

  // [0 => { title: sample, content: Element}, 1 => {..}]
  for (let i = 0, len = content.length; i < len; i++) {
    results[i] = { title: title[i], content: content[i]}
  }

  return results
}

export default ArrayMergeAssoc