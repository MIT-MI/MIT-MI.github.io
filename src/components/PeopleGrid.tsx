import * as React from 'react'
import { PersonCard } from '@/components/ui/person-card'
import { cn, shuffleArray } from '@/lib/utils'

interface PersonData {
  name: string
  avatar?: string | { src: string }
  title?: string
  email?: string
  website?: string
  github?: string
  linkedin?: string
  scholar?: string
  isPastMember?: boolean
}

interface Person {
  id: string
  data: PersonData
}

interface PeopleGridProps {
  people: Person[]
  shuffle?: boolean
  className?: string
}

export function PeopleGrid({
  people: _people,
  shuffle = false,
  className,
}: PeopleGridProps) {
  const people = React.useMemo(() => {
    if (shuffle) {
      return shuffleArray(_people)
    }
    return _people
  }, [_people, shuffle])

  if (people.length === 0) {
    return (
      <p className="text-muted-foreground text-center">No people found.</p>
    )
  }

  return (
    <div className={cn('grid gap-4', className)} style={{ gridTemplateColumns: 'repeat(auto-fill, 216px)' }}>
      {people.map((person) => (
        <PersonCard person={person} key={person.id}/>
      ))}
    </div>
  )
}

