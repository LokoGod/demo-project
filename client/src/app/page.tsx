import HomeCardData from "@/components/visualizations/HomeCardData";
import DashBarChart from "@/components/visualizations/charts/DashBarChart";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Home = () => {
  return (
    <div>
      <HomeCardData />

      

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                  <DashBarChart />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* <RecentSales /> */}
                  </CardContent>
                </Card>
              </div>
    </div>
  );
};

export default Home;
