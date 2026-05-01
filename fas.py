def dfs(grafo, nodo, visitados=None):  # Definimos la función DFS con el grafo, nodo inicial y conjunto de visitados
    if visitados is None:              # Si no se ha pasado un conjunto de visitados
        visitados = set()              # Creamos un conjunto vacío para guardar nodos visitados

    print(nodo, end=" ")               # Imprimimos el nodo actual (sin salto de línea)
    visitados.add(nodo)                # Marcamos el nodo como visitado

    for vecino in grafo[nodo]:         # Recorremos todos los vecinos del nodo actual
        if vecino not in visitados:    # Si el vecino no ha sido visitado
            dfs(grafo, vecino, visitados)  # Llamamos recursivamente DFS con ese vecino

# Grafo de ejemplo
grafo = {                              # Definimos el grafo como diccionario (lista de adyacencia)
    'A': ['B', 'C'],                   # A está conectado con B y C
    'B': ['D', 'E'],                   # B está conectado con D y E
    'C': ['F'],                        # C está conectado con F
    'D': [],                           # D no tiene vecinos
    'E': ['F'],                        # E está conectado con F
    'F': []                            # F no tiene vecinos
}

dfs(grafo, 'A')                        # Llamamos a DFS comenzando desde el nodo A