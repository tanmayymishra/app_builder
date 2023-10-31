import { useCallback, useEffect, useRef } from "react"
import { debounce } from "lodash"

export function UseDebouncedValidate({ values, validate, debounceTime = 200 }) {
  const debouncedFunction = useRef(
    debounce((validateFunc, data) => {
      return validateFunc(data)
    }, debounceTime)
  )

  const debounceValidate = useCallback(data => {
    return debouncedFunction.current(validate, data)
  }, [])

  useEffect(() => {
    debounceValidate(values)
  }, [values])

  useEffect(() => {
    return () => {
      debouncedFunction.current.cancel()
    }
  }, [])
}
