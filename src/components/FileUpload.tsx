import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "./ui/use-toast";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onDataUpload: (data: any) => void;
}

const FileUpload = ({ onDataUpload }: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = () => {
        try {
          const jsonData = JSON.parse(reader.result as string);
          if (
            jsonData?.Activity?.["Follower List"]?.FansList &&
            jsonData?.Activity?.["Following List"]?.Following
          ) {
            onDataUpload(jsonData);
          } else {
            toast({
              title: "Invalid data format",
              description: "Please upload a valid TikTok data export file.",
              variant: "destructive",
            });
          }
        } catch (error) {
          toast({
            title: "Error parsing file",
            description: "Please make sure you upload a valid JSON file.",
            variant: "destructive",
          });
        }
      };

      reader.readAsText(file);
    },
    [onDataUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/json": [".json"],
    },
    multiple: false,
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
    onDropAccepted: () => setIsDragging(false),
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "border-2 border-dashed rounded-xl p-12 transition-all duration-200 cursor-pointer",
        "bg-background/50 backdrop-blur-sm hover:bg-accent/5",
        isDragging
          ? "border-primary scale-[1.02] bg-accent/10"
          : "border-muted-foreground/25"
      )}
    >
      <input {...getInputProps()} />
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </div>
        <div>
          <p className="text-lg font-medium">Drop your TikTok data file here</p>
          <p className="text-sm text-muted-foreground mt-1">
            or click to select file
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;