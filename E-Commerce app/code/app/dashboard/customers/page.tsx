"use client"

import AdminSidebar from "@/components/admin/admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    orders: 5,
    spent: "$1,299.95",
    joined: "2023-06-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    orders: 3,
    spent: "$449.97",
    joined: "2023-08-22",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    orders: 8,
    spent: "$2,199.92",
    joined: "2023-05-10",
  },
  {
    id: 4,
    name: "Sarah Lee",
    email: "sarah@example.com",
    orders: 2,
    spent: "$349.98",
    joined: "2024-01-01",
  },
]

export default function CustomersPage() {
  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Customers</h1>
            <p className="text-muted-foreground">View and manage customer accounts</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Name</th>
                      <th className="text-left py-3 px-4 font-semibold">Email</th>
                      <th className="text-left py-3 px-4 font-semibold">Orders</th>
                      <th className="text-left py-3 px-4 font-semibold">Total Spent</th>
                      <th className="text-left py-3 px-4 font-semibold">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer) => (
                      <tr key={customer.id} className="border-b border-border hover:bg-muted">
                        <td className="py-3 px-4 font-semibold">{customer.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{customer.email}</td>
                        <td className="py-3 px-4">{customer.orders}</td>
                        <td className="py-3 px-4 font-semibold">{customer.spent}</td>
                        <td className="py-3 px-4 text-muted-foreground">{customer.joined}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
