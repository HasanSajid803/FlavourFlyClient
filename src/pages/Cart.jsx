import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate()

  const cartRows = food_list.filter((item)=>cartItems[item._id] > 0)

  if (cartRows.length === 0) {
    return (
      <section className="w-full mt-8 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-12 text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">
                Looks like you haven't added any delicious food to your cart yet.
              </p>
              <Button 
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-primary-foreground"
              >
                Browse Menu
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full mt-8 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Your Cart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full overflow-x-auto">
              <Table className="min-w-[720px]">
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Remove</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartRows.map((item)=> (
                    <TableRow key={item._id}>
                      <TableCell>
                        <img className="w-14 h-14 rounded-xl object-cover" src={item.image} alt="" />
                      </TableCell>
                      <TableCell className="font-semibold">{item.name}</TableCell>
                      <TableCell className="text-primary font-semibold">${item.price}</TableCell>
                      <TableCell>{cartItems[item._id]}</TableCell>
                      <TableCell className="font-semibold">${item.price * cartItems[item._id]}</TableCell>
                      <TableCell>
                        <Button variant="destructive" size="sm" onClick={() => removeFromCart(item._id)}>Remove</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle>Cart Totals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <p>Subtotal</p>
                      <p>${getTotalCartAmount()}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Delivery Fee</p>
                      <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                    </div>
                    <div className="flex justify-between text-base font-semibold">
                      <p>Total</p>
                      <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
                    </div>
                  </div>
                  <Button className="mt-6 w-full bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-primary-foreground" onClick={() => navigate('/order')}>Proceed to checkout</Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle>Promo Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input placeholder="promo code" className="flex-1" />
                    <Button className="shrink-0">Submit</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Cart;
