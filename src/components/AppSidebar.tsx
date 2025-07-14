import { useState } from "react";
import { Home, ShoppingBag, Package, Sparkles, BookOpen, Info, HelpCircle, Mail, Settings, Menu } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { useProducts } from "@/contexts/ProductContext";

const defaultItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Shop All", url: "/shop", icon: ShoppingBag },
  { title: "Kits & Sets", url: "/kits", icon: Package },
  { title: "Skincare", url: "/skincare", icon: Sparkles },
  { title: "Glow Journal", url: "/journal", icon: BookOpen },
  { title: "About Nifora", url: "/about", icon: Info },
  { title: "FAQ", url: "/faq", icon: HelpCircle },
  { title: "Contact Us", url: "/contact", icon: Mail },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { categories } = useProducts();
  const currentPath = location.pathname;
  
  const isCollapsed = state === "collapsed";
  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-muted text-primary font-medium" : "hover:bg-muted/50";

  // Combine default items with dynamic categories
  const items = categories.map(category => {
    const defaultItem = defaultItems.find(item => item.title === category);
    return defaultItem || {
      title: category,
      url: `/${category.toLowerCase().replace(/\s+/g, '-')}`,
      icon: ShoppingBag
    };
  });

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-60"} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-bold text-lg">
            {!isCollapsed && "Zylumia"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
              {/* Admin Link */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/admin" className={getNavCls}>
                    <Settings className="mr-2 h-4 w-4" />
                    {!isCollapsed && <span>Admin</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}