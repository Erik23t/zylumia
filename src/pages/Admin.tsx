import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useProducts } from "@/contexts/ProductContext";
import { toast } from "sonner";
import { Trash2, Edit, Plus, X } from "lucide-react";

const Admin = () => {
  const { products, categories, addProduct, removeProduct, updateProduct, addCategory, removeCategory } = useProducts();
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    originalPrice: '',
    discount: '',
    image: '',
    category: '',
    popular: false
  });
  const [newCategory, setNewCategory] = useState('');
  const [editingProduct, setEditingProduct] = useState<string | null>(null);

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category) {
      toast.error("Preencha os campos obrigatórios");
      return;
    }
    
    addProduct(newProduct);
    setNewProduct({
      name: '',
      description: '',
      price: '',
      originalPrice: '',
      discount: '',
      image: '',
      category: '',
      popular: false
    });
    toast.success("Produto adicionado com sucesso!");
  };

  const handleRemoveProduct = (id: string) => {
    removeProduct(id);
    toast.success("Produto removido com sucesso!");
  };

  const handleAddCategory = () => {
    if (!newCategory.trim()) {
      toast.error("Digite o nome da categoria");
      return;
    }
    
    addCategory(newCategory.trim());
    setNewCategory('');
    toast.success("Categoria adicionada com sucesso!");
  };

  const handleRemoveCategory = (category: string) => {
    removeCategory(category);
    toast.success("Categoria removida com sucesso!");
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Administração</h1>
        <Badge variant="secondary">Admin Panel</Badge>
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="products">Produtos</TabsTrigger>
          <TabsTrigger value="categories">Categorias</TabsTrigger>
        </TabsList>
        
        <TabsContent value="products" className="space-y-6">
          {/* Add Product Form */}
          <Card>
            <CardHeader>
              <CardTitle>Adicionar Novo Produto</CardTitle>
              <CardDescription>Adicione um novo produto à sua loja</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nome do Produto *</Label>
                  <Input
                    id="name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    placeholder="Ex: Máscara Facial Premium"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Categoria *</Label>
                  <Select value={newProduct.category} onValueChange={(value) => setNewProduct({...newProduct, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="price">Preço *</Label>
                  <Input
                    id="price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    placeholder="Ex: £ 29,99"
                  />
                </div>
                <div>
                  <Label htmlFor="originalPrice">Preço Original</Label>
                  <Input
                    id="originalPrice"
                    value={newProduct.originalPrice}
                    onChange={(e) => setNewProduct({...newProduct, originalPrice: e.target.value})}
                    placeholder="Ex: £ 49,99"
                  />
                </div>
                <div>
                  <Label htmlFor="discount">Desconto</Label>
                  <Input
                    id="discount"
                    value={newProduct.discount}
                    onChange={(e) => setNewProduct({...newProduct, discount: e.target.value})}
                    placeholder="Ex: ECONOMIZE 40%"
                  />
                </div>
                <div>
                  <Label htmlFor="image">URL da Imagem</Label>
                  <Input
                    id="image"
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                    placeholder="URL da imagem do produto"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                  placeholder="Descrição detalhada do produto"
                  rows={3}
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="popular"
                  checked={newProduct.popular}
                  onChange={(e) => setNewProduct({...newProduct, popular: e.target.checked})}
                />
                <Label htmlFor="popular">Produto Popular</Label>
              </div>
              <Button onClick={handleAddProduct} className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Produto
              </Button>
            </CardContent>
          </Card>

          {/* Products List */}
          <Card>
            <CardHeader>
              <CardTitle>Produtos Cadastrados ({products.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.map(product => (
                  <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      {product.image && (
                        <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                      )}
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                          )}
                          {product.popular && <Badge variant="secondary">Popular</Badge>}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleRemoveProduct(product.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                {products.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">Nenhum produto cadastrado</p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          {/* Add Category Form */}
          <Card>
            <CardHeader>
              <CardTitle>Adicionar Nova Categoria</CardTitle>
              <CardDescription>Gerencie as categorias do seu menu</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Nome da categoria"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddCategory()}
                />
                <Button onClick={handleAddCategory}>
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Categories List */}
          <Card>
            <CardHeader>
              <CardTitle>Categorias ({categories.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">{category}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveCategory(category)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;