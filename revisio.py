class point:
    def __init__(self,x,y,z):
        self.x=x
        self.y=y
        self.z=z
    def afficher(self) :
        print(f" x= {self.x} y={self.y}  z={self.z}")
    def deplacer(self,dx,dy,dz) :
          self.x+=dx
          self.y+=dy
          self.z+=dz
 
points=point(10,3,5)
points.deplacer(4,5,6)
points.afficher()           
        
        
        