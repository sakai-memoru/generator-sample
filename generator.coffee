p = console.log

g = ->
  p "  enter"
  p yield "  yld"
  p "  after yield"
  "  exit"

g1 = g()
p "start"
p g1.next().value
p "after next"
p g1.next("arg").value
p "end"
