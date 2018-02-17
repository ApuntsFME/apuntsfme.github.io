# Ahora los locos de hacer apuntes a Latex tenemos web!!!
### La url es https://apuntsfme.github.io/

## Esborrar l'historial de commits des de git

Esborrar la carpeta `.git` pot portar problemes. Per esborrar l'historial i mantenir el codi:

```
# Check out to a temporary branch:
git checkout --orphan TEMP_BRANCH

# Add all the files:
git add -A

# Commit the changes:
git commit -am "Initial commit"

# Delete the old branch:
git branch -D master

# Rename the temporary branch to master:
git branch -m master

# Finally, force update to our repository:
git push -f origin master

# Track information for the current branch:
git branch --set-upstream-to=origin/master master
```

Sí, és un copy paste.

## Crear més avatars

Si cal incorporar algú nou a l'equip d'ApuntsFME, els actuals estan basats en els que trobareu [aquí](https://www.flaticon.com/packs/kids-avatars). Cal editar el fitxer ```.svg``` (per tal que es vegi amb bona definició), podeu fer-ho amb el programa *Inkscape*.

### Més informació
Per més informació, llegir [aquesta web](https://gist.github.com/heiswayi/350e2afda8cece810c0f6116dadbe651l) o [Google](https://www.google.es/).
