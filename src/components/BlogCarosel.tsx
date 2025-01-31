import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { projects } from "@/constants/index";
import Link from "next/link";

const BlogCarosel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="mx-auto">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.name}>
              <div className="p-1">
                <Card>
                  <Link href={project.source_code_link}>
                    <CardContent className="flex aspect-square items-center justify-center p-4">
                      <div className="w-full h-full overflow-hidden relative rounded-2xl">
                        {" "}
                        {/* Adicione relative aqui */}
                        <span className="text-2xl text-center forced-color-adjust-auto font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                          {project.name}
                        </span>
                        <iframe
                          src={project.source_code_link}
                          className="w-full h-full overflow-hidden opacity-50"
                          scrolling="no"
                          style={{
                            border: "none",
                            transformOrigin: "0 0",
                            transform: "scale(0.2)",
                            width: "500%",
                            height: "500%",
                            overflow: "hidden",
                            pointerEvents: "none",
                            filter: "blur(15px)", // Aplica o efeito de desfoque
                          }}
                        />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default BlogCarosel;
