import { memo } from "react"

interface ContentHeaderProps {
  selectedGenreTitle: string;
}

function ContentHeaderComponent({ selectedGenreTitle }: ContentHeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenreTitle}</span></span>
    </header>
  )
}

export const ContentHeader = memo(
  ContentHeaderComponent,
  (prevProps, nextProps) =>
    Object.is(prevProps.selectedGenreTitle, nextProps.selectedGenreTitle)
)