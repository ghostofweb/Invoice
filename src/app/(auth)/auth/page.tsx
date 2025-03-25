'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const Page = () => {
  // Separate forms for Login and Signup
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm()

  const {
    register: signupRegister,
    handleSubmit: handleSignupSubmit,
    formState: { errors: signupErrors },
  } = useForm()

  const handleLogin = (data: any) => {
    console.log("Login Data:", data)
    // Handle login logic here
  }

  const handleSignup = (data: any) => {
    console.log("Signup Data:", data)
    // Handle signup logic here
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="w-[450px] bg-white bg-opacity-90 shadow-2xl rounded-2xl p-8 border border-gray-300 backdrop-blur-lg">
        
        {/* Title */}
        <div className="text-center mb-6">
          <span className="text-2xl font-extrabold text-red-600 tracking-wide">InvoicerPro Admin</span>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="flex w-full justify-between bg-gray-200 p-1 rounded-xl">
            <TabsTrigger 
              value="login" 
              className="w-1/2 text-gray-700 data-[state=active]:bg-red-500 data-[state=active]:text-white rounded-lg py-2 transition-all">
              Login
            </TabsTrigger>
            <TabsTrigger 
              value="signup" 
              className="w-1/2 text-gray-700 data-[state=active]:bg-red-500 data-[state=active]:text-white rounded-lg py-2 transition-all">
              Sign Up
            </TabsTrigger>
          </TabsList>

          {/* Login Form */}
          <TabsContent value="login" className="mt-6">
            <form onSubmit={handleLoginSubmit(handleLogin)} className="space-y-5">
              <div>
                <Label className="text-gray-700 font-medium">Email</Label>
                <Input 
                  {...loginRegister("email", { required: "Email is required" })} 
                  type="email" 
                  placeholder="Enter your email" 
                  className="border-gray-300 focus:ring-red-500 px-4 py-2 rounded-lg" 
                />
                {loginErrors.email && <p className="text-red-500 text-sm">{loginErrors.email.message as string}</p>}
              </div>
              <div>
                <Label className="text-gray-700 font-medium">Password</Label>
                <Input 
                  {...loginRegister("password", { required: "Password is required" })} 
                  type="password" 
                  placeholder="Enter your password" 
                  className="border-gray-300 focus:ring-red-500 px-4 py-2 rounded-lg" 
                />
                {loginErrors.password && <p className="text-red-500 text-sm">{loginErrors.password.message as string}</p>}
              </div>
              <Button 
                type="submit" 
                className="w-full bg-red-500 hover:bg-red-600 rounded-lg py-3 text-lg font-semibold tracking-wide transition-all">
                Login
              </Button>
            </form>
          </TabsContent>

          {/* Signup Form */}
          <TabsContent value="signup" className="mt-6">
            <form onSubmit={handleSignupSubmit(handleSignup)} className="space-y-5">
              <div>
                <Label className="text-gray-700 font-medium">Username</Label>
                <Input 
                  {...signupRegister("username", { required: "Username is required" })} 
                  type="text" 
                  placeholder="Enter your username" 
                  className="border-gray-300 focus:ring-red-500 px-4 py-2 rounded-lg" 
                />
                {signupErrors.username && <p className="text-red-500 text-sm">{signupErrors.username.message as string}</p>}
              </div>
              <div>
                <Label className="text-gray-700 font-medium">Email</Label>
                <Input 
                  {...signupRegister("email", { required: "Email is required" })} 
                  type="email" 
                  placeholder="Enter your email" 
                  className="border-gray-300 focus:ring-red-500 px-4 py-2 rounded-lg" 
                />
                {signupErrors.email && <p className="text-red-500 text-sm">{signupErrors.email.message as string}</p>}
              </div>
              <div>
                <Label className="text-gray-700 font-medium">Password</Label>
                <Input 
                  {...signupRegister("password", { required: "Password is required" })} 
                  type="password" 
                  placeholder="Create a password" 
                  className="border-gray-300 focus:ring-red-500 px-4 py-2 rounded-lg" 
                />
                {signupErrors.password && <p className="text-red-500 text-sm">{signupErrors.password.message as string}</p>}
              </div>
              <Button 
                type="submit" 
                className="w-full bg-red-500 hover:bg-red-600 rounded-lg py-3 text-lg font-semibold tracking-wide transition-all">
                Sign Up
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Page
