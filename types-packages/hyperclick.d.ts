import * as Atom from "atom"

export interface HyperclickProvider {
  // Use this to provide a suggestion for single-word matches.
  // Optionally set `wordRegExp` to adjust word-matching.
  getSuggestionForWord?: (
    textEditor: Atom.TextEditor,
    text: string,
    range: Atom.Range
  ) => Promise<HyperclickSuggestion | null | undefined>

  wordRegExp?: RegExp

  // Use this to provide a suggestion if it can have non-contiguous ranges.
  // A primary use-case for this is Objective-C methods.
  getSuggestion?: (
    textEditor: Atom.TextEditor,
    position: Atom.Point
  ) => Promise<HyperclickSuggestion | null | undefined>

  // Must be unique. Used for analytics.
  providerName?: string

  // The higher this is, the more precedence the provider gets.
  priority: number

  // Optionally, limit the set of grammar scopes the provider should apply to.
  grammarScopes?: string[]
}

export interface HyperclickSuggestion {
  // The range(s) to underline to provide as a visual cue for clicking.
  range: Atom.Range | Atom.Range[]

  // The function to call when the underlined text is clicked.
  callback: (() => void) | Array<{ rightLabel?: string; title: string; callback: () => void }>
}
