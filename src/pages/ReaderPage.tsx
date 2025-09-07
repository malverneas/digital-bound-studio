import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Bookmark, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  Sun, 
  Moon,
  ZoomIn,
  ZoomOut,
  Menu,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ReaderPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(342);
  const [fontSize, setFontSize] = useState([16]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const navigate = useNavigate();

  const progress = (currentPage / totalPages) * 100;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-slate-900 text-slate-100' 
        : 'bg-amber-50 text-slate-900'
    }`}>
      
      {/* Reader Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        showControls ? 'translate-y-0' : '-translate-y-full'
      } ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-amber-200'} border-b`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate(-1)}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Exit Reader
              </Button>
              
              <div className="hidden md:block">
                <h1 className="font-display text-lg font-semibold">Shadows in the City</h1>
                <p className="text-sm text-muted-foreground">by Marcus Detective</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Badge variant="outline" className="hidden md:flex">
                Page {currentPage} of {totalPages}
              </Badge>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-accent' : ''}`} />
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                >
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowControls(!showControls)}
                >
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="pb-2">
            <div className={`h-1 rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-amber-200'}`}>
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Reading Controls Sidebar */}
      <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-300 ${
        showControls ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <Card className={`p-4 space-y-4 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white'}`}>
          <div className="text-center">
            <div className="text-sm font-medium mb-2">Font Size</div>
            <div className="flex items-center gap-2">
              <ZoomOut className="w-4 h-4" />
              <Slider
                value={fontSize}
                onValueChange={setFontSize}
                max={24}
                min={12}
                step={1}
                className="w-20"
              />
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-sm font-medium mb-2">Navigation</div>
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Reading Area */}
      <main 
        className="container mx-auto px-4 py-8 max-w-4xl cursor-pointer"
        onClick={() => setShowControls(!showControls)}
      >
        <Card className={`min-h-[80vh] p-8 md:p-12 ${
          isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white'
        }`}>
          {/* Chapter Header */}
          <div className="mb-8">
            <Badge className="mb-4">Chapter 12</Badge>
            <h2 className="font-display text-2xl font-bold mb-4">The Discovery</h2>
          </div>

          {/* Book Content */}
          <div 
            className="prose max-w-none leading-relaxed"
            style={{ fontSize: `${fontSize[0]}px` }}
          >
            <p className="mb-6">
              Detective Sarah Chen stared at the evidence board, her coffee growing cold as the pieces 
              of the puzzle slowly began to align. The warehouse fire, the missing persons reports, 
              the encrypted files—they weren't separate incidents as she'd initially thought.
            </p>
            
            <p className="mb-6">
              A soft knock interrupted her concentration. "Detective Chen?" Officer Martinez peered 
              around the door. "You've been here all night. Maybe you should—"
            </p>
            
            <p className="mb-6">
              "Martinez, look at this." Sarah's voice cut through the early morning silence of the 
              precinct. She pointed to a series of photographs pinned to the board. "What do you 
              see in these crime scenes?"
            </p>
            
            <p className="mb-6">
              Martinez approached cautiously, studying the images. "Standard warehouse district. 
              Nothing unusual except for the—" He stopped mid-sentence, his eyes widening. 
              "The symbols. They're all there, aren't they?"
            </p>
            
            <p className="mb-6">
              Sarah nodded grimly. "Every single location. And they're not random graffiti like 
              we initially thought. They're signatures. Someone is marking their territory, 
              and it's bigger than we imagined."
            </p>
            
            <p className="mb-6">
              The detective pulled out her phone and scrolled to a message that had arrived during 
              the night. The sender was anonymous, but the content made her blood run cold: 
              "You're getting closer, Detective. But are you prepared for what you'll find?"
            </p>
            
            <p className="mb-6">
              Sarah's hands trembled slightly as she set down the phone. After fifteen years on 
              the force, she thought she'd seen everything. But this case was different. This case 
              was personal. And somewhere in the shadows of the city, someone was watching, 
              waiting for her next move.
            </p>
            
            <div className="text-center mt-12 text-muted-foreground">
              <BookOpen className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Content protected • No copying or downloading allowed</p>
            </div>
          </div>
        </Card>

        {/* Navigation Footer */}
        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-2">
              Page {currentPage} of {totalPages}
            </div>
            <div className="text-xs text-muted-foreground">
              {Math.round(progress)}% complete
            </div>
          </div>
          
          <Button
            variant="outline"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </main>
    </div>
  );
}