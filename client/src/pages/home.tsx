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
  Github,
  Brain,
  Activity
} from "lucide-react";


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
      <nav className="sticky top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Github className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-lg sm:text-xl font-semibold">Stahiki</span>
              </div>
              
              <div className="hidden lg:flex items-center space-x-6 text-sm">
                <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">Platform</a>
                <a href="#industries" className="text-foreground hover:text-primary transition-colors font-medium">Industries</a>
                <a href="#early-access" className="text-foreground hover:text-primary transition-colors font-medium">Early Access</a>
                <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Blog</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-sm">
                <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                  Contact
                </Button>
                <Button variant="ghost" size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
                  Demo
                </Button>
              </div>
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pb-32 overflow-hidden min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-5xl mx-auto">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Build intelligent{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                digital twins
              </span>{" "}
              with AI in minutes, not months
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 lg:mb-12 leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stahiki is the first AI-native platform that transforms complex systems into intelligent digital twins. From smart cities to precision agriculture—build, simulate, and optimize in real-time.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 lg:mb-16 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex bg-card rounded-md border border-border overflow-hidden w-full sm:max-w-md">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none text-sm sm:text-base"
                  required
                />
                <Button 
                  type="submit"
                  className="github-primary-button text-white px-4 sm:px-6 rounded-none border-0 text-sm sm:text-base whitespace-nowrap"
                  onClick={handleEmailSubmit}
                >
                  Join Waitlist
                </Button>
              </div>
              
              <Button 
                variant="outline" 
                className="github-button border-border w-full sm:w-auto"
              >
                Watch Demo
                <Play className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* 3D Factory Scene */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] opacity-50 sm:opacity-60 dark:opacity-30 dark:sm:opacity-40"
            animate={{ 
              rotateY: [0, 360],
              scale: [0.95, 1, 0.95] 
            }}
            transition={{ 
              rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="relative w-full h-full">
              {/* 3D Factory Automation Scene */}
              <div className="w-full h-full rounded-lg md:rounded-xl overflow-hidden shadow-xl md:shadow-2xl border border-border/10 md:border-border/20">
                <iframe 
                  src="https://sketchfab.com/models/fb74cae2824e46d198521ea5ae6d3ef1/embed?autostart=1&ui_hint=0&ui_infos=0&ui_watermark=0&ui_settings=0&preload=1&camera=0"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  title="Futuristic Car Factory Production Line"
                  loading="lazy"
                ></iframe>
              </div>
              
              {/* Floating AI indicators - hidden on mobile for cleaner look */}
              <motion.div 
                className="absolute top-2 left-2 md:top-4 md:left-4 hidden sm:flex items-center space-x-2 bg-blue-500/10 backdrop-blur-sm rounded-full px-2 py-1 md:px-3 md:py-1 border border-blue-500/20"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Brain className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                <span className="text-xs font-medium text-blue-500 hidden md:inline">AI Processing</span>
              </motion.div>
              
              <motion.div 
                className="absolute top-2 right-2 md:top-4 md:right-4 hidden sm:flex items-center space-x-2 bg-green-500/10 backdrop-blur-sm rounded-full px-2 py-1 md:px-3 md:py-1 border border-green-500/20"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              >
                <Activity className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                <span className="text-xs font-medium text-green-500 hidden md:inline">Live Data</span>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-2 left-1/2 md:bottom-4 transform -translate-x-1/2 hidden sm:flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm rounded-full px-2 py-1 md:px-3 md:py-1 border border-purple-500/20"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
              >
                <Zap className="w-3 h-3 md:w-4 md:h-4 text-purple-500" />
                <span className="text-xs font-medium text-purple-500 hidden lg:inline">Digital Twin Active</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stahiki Features */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Coming Soon
            </div>
            <h2 className="text-3xl font-bold mb-4">The future of digital twin development</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience next-generation AI that understands your industry and builds intelligent simulations from simple descriptions.
            </p>
          </div>
          
          {/* Interactive Demo */}
          <div className="relative max-w-6xl mx-auto mb-16">
            <Card className="overflow-hidden border border-border">
              <div className="bg-card border-b border-border p-4">
                <div className="flex items-center space-x-8">
                  <Button variant="ghost" className="text-primary border-b-2 border-primary">
                    <Brain className="w-4 h-4 mr-2" />
                    AI Engine
                  </Button>
                  <Button variant="ghost" className="text-muted-foreground">
                    <Building className="w-4 h-4 mr-2" />
                    Industries
                  </Button>
                  <Button variant="ghost" className="text-muted-foreground">
                    <Network className="w-4 h-4 mr-2" />
                    Simulation
                  </Button>
                  <Button variant="ghost" className="text-muted-foreground">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Analytics
                  </Button>
                  <Button variant="ghost" className="text-muted-foreground">
                    <Shield className="w-4 h-4 mr-2" />
                    Security
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Describe your system, and our AI builds the digital twin instantly.
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Stahiki's AI engine understands complex systems across industries. Simply describe what you want to simulate—from wind farms to urban traffic—and watch your digital twin come to life.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span>Generate twins from <strong>natural language</strong> descriptions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span>Real-time physics and behavioral simulation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span>Connect to live data streams and IoT devices</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <motion.div 
                      className="bg-card border border-border rounded-lg p-6"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Interactive 3D Demo */}
                      <div className="w-full h-64 bg-muted rounded-md overflow-hidden">
                        <iframe 
                          src="https://sketchfab.com/models/1cfd1909311545af8d548ed5db650407/embed?autostart=1&ui_hint=0&ui_infos=0&ui_watermark=0&ui_settings=0&preload=1"
                          className="w-full h-full"
                          frameBorder="0"
                          allowFullScreen
                          title="Factory Conveyor Belt Demo"
                        ></iframe>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-8">Built for industries that can't afford downtime</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              From precision agriculture to smart cities, Stahiki's AI understands the unique challenges of critical infrastructure and complex systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: Leaf, name: "Agriculture", desc: "Crop optimization & yield prediction" },
              { icon: Building, name: "Smart Cities", desc: "Urban planning & traffic flow" },
              { icon: Cog, name: "Manufacturing", desc: "Production line optimization" },
              { icon: Zap, name: "Energy", desc: "Grid management & renewables" },
              { icon: Globe, name: "Logistics", desc: "Supply chain simulation" },
              { icon: Shield, name: "Defense", desc: "Mission-critical systems" },
              { icon: Database, name: "Data Centers", desc: "Infrastructure monitoring" },
              { icon: Network, name: "Telecom", desc: "Network optimization" }
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                className="text-center p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <industry.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-primary" />
                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">{industry.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Feature 1 */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <Brain className="w-8 h-8 text-purple-500" />
                <h3 className="text-2xl font-bold">AI that understands your domain</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Our foundation models are trained on industry-specific knowledge and physics principles.
              </p>
              <Card className="border border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Active Simulations</span>
                      <span className="text-sm text-muted-foreground">Early Access</span>
                    </div>
                    {[
                      { name: "Smart Farm Irrigation", status: "Running", progress: "87%" },
                      { name: "City Traffic Flow", status: "Optimizing", progress: "92%" },
                      { name: "Wind Farm Output", status: "Predicting", progress: "76%" },
                      { name: "Supply Chain Route", status: "Analyzing", progress: "94%" },
                      { name: "Factory Floor Layout", status: "Complete", progress: "100%" }
                    ].map((sim, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${sim.status === 'Complete' ? 'bg-green-500' : 'bg-blue-500 animate-pulse'}`}></div>
                          <span className="text-sm">{sim.name}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{sim.progress}</span>
                          <span>{sim.status}</span>
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
                <Clock className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-bold">From idea to simulation in minutes</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Skip the months of manual modeling. Describe your system and watch it come to life instantly.
              </p>
              <Card className="border border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-semibold">Twin Creation Timeline</span>
                        <span className="text-sm text-green-500 font-medium">95% faster than traditional methods</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm">Describe system requirements</span>
                          </div>
                          <span className="text-xs text-muted-foreground">30 seconds</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm">AI generates initial twin</span>
                          </div>
                          <span className="text-xs text-muted-foreground">2 minutes</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm">Connect real-world data</span>
                          </div>
                          <span className="text-xs text-muted-foreground">1 minute</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-sm">Live simulation running</span>
                          </div>
                          <span className="text-xs text-green-500 font-medium">Ready!</span>
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
                <Target className="w-8 h-8 text-green-500" />
                <h3 className="text-2xl font-bold">Predict, optimize, prevent</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Your digital twins don't just mirror reality—they predict the future and help you make better decisions.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <Card className="border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-medium">Predictive Insights</div>
                      <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">Live</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Equipment failure prediction</span>
                        <span className="text-orange-500">72h early warning</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Optimal resource allocation</span>
                        <span className="text-green-500">23% efficiency gain</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Performance bottlenecks</span>
                        <span className="text-blue-500">Real-time detection</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-border">
                  <CardContent className="p-4">
                    <div className="text-sm font-medium mb-2">What-if Scenarios</div>
                    <div className="text-xs text-muted-foreground">
                      "What happens if we increase production by 30%?"<br/>
                      "How will weather changes affect crop yield?"<br/>
                      "What's the impact of adding a new production line?"
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
                <Network className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-bold">Connect to your existing systems</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Seamlessly integrate with your current infrastructure, databases, and IoT devices.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "IoT Sensors", status: "Connected", count: "2.4k" },
                  { name: "ERP Systems", status: "Syncing", count: "12" },
                  { name: "Databases", status: "Live", count: "8" },
                  { name: "APIs", status: "Active", count: "156" },
                  { name: "Edge Devices", status: "Monitoring", count: "890" },
                  { name: "Cloud Services", status: "Integrated", count: "24" }
                ].map((integration, i) => (
                  <Card key={i} className="border border-border">
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium">{integration.name}</span>
                        <div className={`w-2 h-2 rounded-full ${integration.status === 'Connected' || integration.status === 'Live' || integration.status === 'Integrated' ? 'bg-green-500' : 'bg-blue-500 animate-pulse'}`}></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{integration.status}</span>
                        <span className="text-xs font-medium">{integration.count}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="early-access" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                <Star className="w-4 h-4 mr-2" />
                Limited Early Access
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Join the future of digital twin development
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                We're working with select partners to revolutionize how complex systems are simulated and optimized. Be among the first to experience AI-native digital twins.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            <Card className="border border-border">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Exclusive Access</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Work directly with our team to build your first AI-generated digital twin.
                </p>
                <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded inline-block">
                  Rolling invitations
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Enterprise-grade Security</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your data and models are protected with SOC2 compliance and end-to-end encryption.
                </p>
                <div className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded inline-block">
                  Production ready
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardContent className="p-6">
                <Zap className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Shape the Product</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your feedback directly influences our roadmap and feature development.
                </p>
                <div className="text-xs text-purple-500 bg-purple-500/10 px-2 py-1 rounded inline-block">
                  Partner program
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Ready to transform how you build digital twins?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 px-4">
              Join the waitlist for early access to Stahiki's AI-native platform. Whether you're optimizing smart cities, managing precision agriculture, or running complex manufacturing operations—the future of digital twins starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-8 px-4">
              <div className="flex bg-card rounded-md border border-border overflow-hidden w-full sm:max-w-md">
                <Input 
                  type="email" 
                  placeholder="Enter your work email" 
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none text-sm sm:text-base"
                />
                <Button 
                  type="submit"
                  className="github-primary-button text-white px-4 sm:px-6 rounded-none border-0 text-sm sm:text-base whitespace-nowrap"
                >
                  Join Waitlist
                </Button>
              </div>
              
              <Button 
                variant="outline" 
                className="github-button border-border w-full sm:w-auto"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:space-x-8 text-sm text-muted-foreground px-4">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Early access program</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Direct founder access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <div className="flex items-center space-x-3">
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm text-muted-foreground">
                © 2024 Stahiki, Inc.
              </span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Careers</a>
              <a href="#" className="hover:text-foreground transition-colors">Blog</a>
              <a href="#" className="hover:text-foreground transition-colors">Press</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}