import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { 
  ArrowRight,
  Code,
  GitBranch,
  Users,
  Zap,
  Shield,
  Globe,
  Star,
  Play,
  ChevronRight,
  Check,
  Building,
  Leaf,
  Cog,
  BarChart3,
  Network,
  Database,
  Clock,
  Target,
  Github
} from "lucide-react";
import dashboardImage from "@assets/pr1_1752699196392.png";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  const logos = [
    "Shopify", "EY", "Figma", "Duolingo", "New York Times", 
    "Mercado Libre", "American Airlines", "Ford", "Mercedes Benz", 
    "Société Générale", "Vodafone", "Philips", "SAP", "Infosys", "Spotify"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <Github className="w-8 h-8" />
                <span className="text-xl font-semibold">Stahiki</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <a href="#" className="text-foreground hover:text-primary transition-colors">Product</a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">Solutions</a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">Open Source</a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">Pricing</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <Button variant="ghost" size="sm">
                  Search or jump to...
                </Button>
                <Button variant="ghost" size="sm">
                  Sign in
                </Button>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Build and ship digital twins on a single,{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                collaborative platform
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join the world's most widely adopted AI-powered developer platform.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex bg-card rounded-md border border-border overflow-hidden w-full max-w-md">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
                  required
                />
                <Button 
                  type="submit"
                  className="github-primary-button text-white px-6 rounded-none border-0"
                  onClick={handleEmailSubmit}
                >
                  Sign up for Stahiki
                </Button>
              </div>
              
              <Button 
                variant="outline" 
                className="github-button border-border"
              >
                Try Stahiki Copilot
                <Play className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Floating UI Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-40 dark:opacity-30"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative w-full h-full">
              <img 
                src={dashboardImage} 
                alt="Stahiki Dashboard"
                className="w-full h-full object-cover rounded-xl shadow-2xl border border-border"
              />
              
              {/* Floating particles */}
              <motion.div 
                className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500/20 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0 }}
              />
              <motion.div 
                className="absolute -top-4 -right-12 w-12 h-12 bg-purple-500/20 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-12 w-20 h-20 bg-pink-500/20 rounded-full"
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stahiki Features */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Stahiki features</h2>
          </div>
          
          {/* Interactive Demo */}
          <div className="relative max-w-6xl mx-auto mb-16">
            <Card className="overflow-hidden border border-border">
              <div className="bg-card border-b border-border p-4">
                <div className="flex items-center space-x-8">
                  <Button variant="ghost" className="text-primary border-b-2 border-primary">
                    <Code className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="ghost" className="text-muted-foreground">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Plan
                  </Button>
                  <Button variant="ghost" className="text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    Collaborate
                  </Button>
                  <Button variant="ghost" className="text-muted-foreground">
                    <Zap className="w-4 h-4 mr-2" />
                    Automate
                  </Button>
                  <Button variant="ghost" className="text-muted-foreground">
                    <Shield className="w-4 h-4 mr-2" />
                    Secure
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Build code quickly and more securely with Stahiki Copilot embedded throughout your workflows.
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      AI-powered digital twin creation with intelligent code suggestions, automated workflows, and real-time collaboration.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span>Work <strong>55% faster</strong> with AI assistance</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span>Increase productivity with AI-powered coding assistance</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <motion.div 
                      className="bg-card border border-border rounded-lg p-6"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img 
                        src={dashboardImage} 
                        alt="Code Demo"
                        className="w-full h-64 object-cover rounded-md"
                      />
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-8">Stahiki is used by</h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                className="text-muted-foreground font-semibold text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Feature 1 */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <Zap className="w-8 h-8 text-yellow-500" />
                <h3 className="text-2xl font-bold">Automate any workflow</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Optimize your process with simple and secured CI/CD.
              </p>
              <Card className="border border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">45,167 workflow runs</span>
                      <span className="text-sm text-muted-foreground">Last 30 days</span>
                    </div>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">Digital Twin Build #{5000 - i}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>2m {15 + i}s</span>
                          <span>{Math.floor(Math.random() * 10) + 1}m ago</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <Code className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-bold">Get up and running in seconds</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Start building instantly with a comprehensive dev environment in the cloud.
              </p>
              <Card className="border border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-semibold">Digital Twin Workspace</span>
                        <Button size="sm" className="github-primary-button text-white">
                          Create workspace on main
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-card border border-border rounded-md p-3">
                          <div className="text-sm font-medium mb-2">Code Editor</div>
                          <div className="text-xs text-muted-foreground">twin-builder.ts</div>
                        </div>
                        <div className="bg-card border border-border rounded-md p-3">
                          <div className="text-sm font-medium mb-2">Live Preview</div>
                          <div className="text-xs text-muted-foreground">Real-time simulation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <Globe className="w-8 h-8 text-purple-500" />
                <h3 className="text-2xl font-bold">Build on the go</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Manage projects and chat with Stahiki Copilot from anywhere.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="border border-border">
                  <CardContent className="p-4">
                    <div className="text-sm font-medium mb-2">Mobile Dashboard</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-xs">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Farm Twin #1247</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>City Simulation</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-border">
                  <CardContent className="p-4">
                    <div className="text-sm font-medium mb-2">AI Assistant</div>
                    <div className="text-xs text-muted-foreground">
                      "Help me optimize this twin..."
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <Network className="w-8 h-8 text-green-500" />
                <h3 className="text-2xl font-bold">Integrate the tools you love</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Sync with 17,000+ integrations and a growing library of Copilot Extensions.
              </p>
              <div className="grid grid-cols-6 gap-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="aspect-square bg-muted border border-border rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-sm"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Apply fixes in seconds. Spend less time fixing vulnerabilities and more time building features with Copilot Autofix.
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                7x faster vulnerability fixes with Stahiki
              </p>
              <Button className="github-primary-button text-white">
                Explore Stahiki Advanced Security
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            <Card className="border border-border">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Solve security debt</h3>
                <p className="text-sm text-muted-foreground">
                  Leverage AI-assisted security campaigns to reduce application vulnerabilities and zero-day attacks.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardContent className="p-6">
                <Database className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Dependencies you can depend on</h3>
                <p className="text-sm text-muted-foreground">
                  Update vulnerable dependencies with supported fixes for breaking changes.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Your secrets, your business: protected</h3>
                <p className="text-sm text-muted-foreground">
                  Detect, prevent, and remediate leaked secrets across your organization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Millions of developers and businesses call Stahiki home
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Whether you're scaling your development process or just learning how to code, Stahiki is where you belong. Join the world's most widely adopted AI-powered developer platform to build the technologies that redefine what's possible.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex bg-card rounded-md border border-border overflow-hidden w-full max-w-md">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
                />
                <Button 
                  type="submit"
                  className="github-primary-button text-white px-6 rounded-none border-0"
                >
                  Sign up for Stahiki
                </Button>
              </div>
              
              <Button 
                variant="outline" 
                className="github-button border-border"
              >
                Try Stahiki Copilot
                <Play className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Github className="w-6 h-6" />
              <span className="text-sm text-muted-foreground">
                © 2024 Stahiki, Inc.
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Security</a>
              <a href="#" className="hover:text-foreground transition-colors">Status</a>
              <a href="#" className="hover:text-foreground transition-colors">Docs</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact Stahiki</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}