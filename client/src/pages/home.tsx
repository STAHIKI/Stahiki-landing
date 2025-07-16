import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { 
  Rocket, 
  Brain, 
  ChartLine, 
  Building, 
  Zap, 
  Leaf,
  Github,
  Twitter,
  Linkedin,
  Layers,
  Gamepad2,
  Network,
  Database,
  Clock,
  Target
} from "lucide-react";
import dashboardImage from "@assets/pr1_1752699196392.png";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email submission
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[hsl(var(--stahiki-primary))] to-[hsl(var(--stahiki-secondary))] rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold">Stahiki</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button className="bg-[hsl(var(--stahiki-primary))] hover:bg-[hsl(var(--stahiki-primary))]/90">
                Request Access
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[hsl(var(--stahiki-light))] to-background dark:from-background dark:to-muted/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Build Intelligent Digital Twins<br/>
              <span className="bg-gradient-to-r from-[hsl(var(--stahiki-primary))] to-[hsl(var(--stahiki-secondary))] bg-clip-text text-transparent">
                with AI, Instantly
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stahiki is an AI-native platform that lets you simulate, monitor, and automate physical systems — from smart cities to farms — in hours, not months.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleEmailSubmit} className="flex bg-card rounded-lg shadow-lg border border-border p-2 w-full max-w-md">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-[hsl(var(--stahiki-primary))] hover:bg-[hsl(var(--stahiki-primary))]/90 px-6"
                >
                  Request Early Access
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
        
        {/* Floating UI Mockups */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Main Dashboard Mockup */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-64 opacity-30 dark:opacity-20"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img 
              src={dashboardImage} 
              alt="Stahiki Dashboard"
              className="w-full h-full object-cover rounded-xl shadow-2xl border border-border"
            />
          </motion.div>
          
          {/* Floating Elements */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-[hsl(var(--stahiki-primary))]/20 to-[hsl(var(--stahiki-secondary))]/20 rounded-full opacity-60"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: -2 }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-[hsl(var(--stahiki-accent))]/20 to-[hsl(var(--stahiki-primary))]/20 rounded-full opacity-60"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: -4 }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Build smarter systems, faster
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment in hours, not months. Our AI-native platform transforms how you create digital twins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              className="text-center p-8 bg-muted/50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--stahiki-primary))] to-[hsl(var(--stahiki-secondary))] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Rocket className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                AI-generated simulations in minutes
              </h3>
              <p className="text-muted-foreground">
                Leverage cutting-edge AI to automatically generate complex simulations from simple descriptions. No coding required.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              className="text-center p-8 bg-muted/50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--stahiki-secondary))] to-[hsl(var(--stahiki-accent))] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Brain className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Drag & drop logic flows
              </h3>
              <p className="text-muted-foreground">
                Intuitive visual workflow builder that lets you create complex automation logic without writing a single line of code.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              className="text-center p-8 bg-muted/50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--stahiki-accent))] to-[hsl(var(--stahiki-primary))] rounded-lg flex items-center justify-center mx-auto mb-6">
                <ChartLine className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Real-time data dashboards
              </h3>
              <p className="text-muted-foreground">
                Monitor your digital twins with beautiful, real-time dashboards that provide actionable insights at a glance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Demo Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--stahiki-light))] to-background dark:from-muted/20 dark:to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              See Stahiki in action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of AI-native digital twin creation with our intuitive platform.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Main Dashboard Screenshot */}
            <Card className="overflow-hidden shadow-2xl">
              <div className="bg-muted/50 p-4 border-b border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 text-sm text-muted-foreground">
                    stahiki.com/dashboard
                  </div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <CardContent className="p-8 bg-gradient-to-br from-muted/50 to-muted/30">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                  {/* Stats Cards */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Active Twins</h3>
                        <ChartLine className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="text-3xl font-bold">24</div>
                      <div className="text-sm text-green-500">+4 this week</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Data Points</h3>
                        <Database className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="text-3xl font-bold">1.2M</div>
                      <div className="text-sm text-blue-500">+15% today</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Processing Time</h3>
                        <Clock className="w-4 h-4 text-purple-500" />
                      </div>
                      <div className="text-3xl font-bold">234ms</div>
                      <div className="text-sm text-purple-500">-12ms avg</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Accuracy</h3>
                        <Target className="w-4 h-4 text-orange-500" />
                      </div>
                      <div className="text-3xl font-bold">98.7%</div>
                      <div className="text-sm text-orange-500">+0.3% today</div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Industry Modules */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Building Design</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Tools for architectural design and project management.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
                          <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Process Optimization</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Features for optimizing industrial processes and monitoring equipment.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <Leaf className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Crop Simulation</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Options for simulating crop growth and managing resources.</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Built With Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Built with industry-leading technologies
            </h2>
            <p className="text-lg text-muted-foreground">
              Stahiki integrates with the tools you already know and trust
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex items-center justify-center p-6 bg-muted/50 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-center">
                <Network className="w-8 h-8 text-red-500 mb-2 mx-auto" />
                <div className="text-sm font-medium">Node-RED</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-muted/50 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-center">
                <Layers className="w-8 h-8 text-orange-500 mb-2 mx-auto" />
                <div className="text-sm font-medium">Eclipse Ditto</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-muted/50 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-center">
                <Gamepad2 className="w-8 h-8 text-blue-500 mb-2 mx-auto" />
                <div className="text-sm font-medium">PlayCanvas</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-muted/50 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-center">
                <Brain className="w-8 h-8 text-green-500 mb-2 mx-auto" />
                <div className="text-sm font-medium">GPT-4</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--stahiki-primary))] to-[hsl(var(--stahiki-secondary))]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start building smarter systems with Stahiki
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and enterprises who are already transforming their industries with AI-powered digital twins.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex bg-white rounded-lg shadow-lg p-2 w-full max-w-md">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-900 placeholder-gray-500"
                required
              />
              <Button 
                type="submit"
                className="bg-[hsl(var(--stahiki-primary))] hover:bg-[hsl(var(--stahiki-primary))]/90 px-6"
              >
                Get Started
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-blue-100 mt-4">
            No credit card required. Start building in minutes.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[hsl(var(--stahiki-primary))] to-[hsl(var(--stahiki-secondary))] rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold">Stahiki</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building the future of digital twin technology
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
