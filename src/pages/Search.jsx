import React, { useContext, useMemo } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '@/components/FoodItem'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function Search() {
  const { food_list } = useContext(StoreContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const q = (searchParams.get('q') || '').trim()

  const results = useMemo(() => {
    if (!q) return []
    const query = q.toLowerCase()
    return food_list.filter(item => {
      const name = (item.name || '').toLowerCase()
      const desc = (item.description || '').toLowerCase()
      const category = (item.category || '').toLowerCase()
      return name.includes(query) || desc.includes(query) || category.includes(query)
    })
  }, [q, food_list])

  const handleChange = (e) => {
    const next = e.target.value
    setSearchParams(next ? { q: next } : {})
  }

  return (
    <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-border text-primary bg-transparent mb-4">🔎 Search</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Results for <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">{q || '…'}</span></h1>
          <p className="text-muted-foreground mt-2">{q ? `${results.length} item${results.length === 1 ? '' : 's'} found` : 'Type to search our menu'}</p>
          <div className="mt-6 max-w-xl mx-auto">
            <div className="relative">
              <Input autoFocus value={q} onChange={handleChange} placeholder="Search dishes, ingredients, categories…" />
            </div>
          </div>
        </div>

        {!q ? (
          <Card className="max-w-xl mx-auto bg-card/50">
            <CardContent className="p-8 text-center">
              <div className="text-5xl mb-3">🍜</div>
              <p className="text-muted-foreground">Start typing above to find your favorite meals.</p>
            </CardContent>
          </Card>
        ) : results.length === 0 ? (
          <Card className="max-w-xl mx-auto bg-card/50">
            <CardContent className="p-8 text-center">
              <div className="text-5xl mb-3">😕</div>
              <h2 className="text-xl font-semibold text-foreground mb-2">No results</h2>
              <p className="text-muted-foreground mb-6">We couldn’t find any matches for “{q}”. Try a different keyword.</p>
              <Button variant="outline" onClick={() => navigate('/')}>Go Home</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {results.map(item => (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Search


