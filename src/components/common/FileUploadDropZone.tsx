import React, { useRef, useState } from 'react';

type FileStatus = 'uploading' | 'uploaded';

interface UploadFile {
  id: string;
  file: File;
  progress: number;
  status: FileStatus;
}

const formatBytes = (bytes: number) => {
  if (bytes === 0) return '0 KB';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const FileUploadDropZone: React.FC = () => {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const uploadFiles: UploadFile[] = [];
    Array.from(selectedFiles).forEach((file) => {
      // Only accept XLS, XLSX, CSV
      if (!/\.(xls|xlsx|csv|png|jpg)$/i.test(file.name)) return;

      uploadFiles.push({
        id: Math.random().toString(36).substring(2),
        file,
        progress: 0,
        status: 'uploading',
      });
    });

    uploadFiles.forEach(simulateUpload);

    setFiles((prev) => [...prev, ...uploadFiles]);
  };

  const simulateUpload = (uploadFile: UploadFile) => {
    let progress = 0;
    const total = uploadFile.file.size;
    const interval = setInterval(() => {
      progress += Math.random() * 20 + 10;
      setFiles((prevFiles) =>
        prevFiles.map((f) =>
          f.id === uploadFile.id
            ? {
                ...f,
                progress: Math.min(progress, total),
                status: progress >= total ? 'uploaded' : 'uploading',
              }
            : f
        )
      );
      if (progress >= total) clearInterval(interval);
    }, 400);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleDelete = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div>
      <label className="font-medium text-[15px] mb-2 block">Upload Stock</label>
      <div
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-indigo-400 rounded-lg text-center py-8 cursor-pointer mb-5 bg-white transition hover:bg-indigo-50"
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple
          accept=".xls,.xlsx,.csv"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <div>
          <div className="text-indigo-400 font-semibold text-base mb-1 flex items-center justify-center gap-1">
            <span role="img" aria-label="cloud" className="text-lg">☁️</span>
            Click here to upload
          </div>
          <div className="font-semibold text-[17px] mb-1">Drag &amp; Drop</div>
          <div className="text-gray-400 text-sm">XLX &amp; CSV formats, upto 50Mb</div>
        </div>
      </div>

      <div>
        {files.map((fileObj) => {
          const { id, file, progress, status } = fileObj;
          const percent = Math.floor((progress / file.size) * 100);
          const isUploading = status === 'uploading';
          return (
            <div
              key={id}
              className="bg-indigo-50 rounded-xl px-4 py-4 mb-4 flex items-start relative shadow-sm"
            >
              <img
                src="https://img.icons8.com/color/48/000000/ms-excel.png"
                alt="excel"
                className="w-10 h-10 mr-4"
              />
              <div className="flex-1">
                <div className="font-bold text-lg text-gray-900 mb-0.5">
                  {file.name.replace(/\.[^/.]+$/, '')}
                </div>
                <div className="text-sm text-gray-400 mb-1">
                  {formatBytes(Math.min(progress, file.size))} of {formatBytes(file.size)}
                  {" "}•{" "}
                  {isUploading ? (
                    <span className="inline-flex items-center gap-1">
                      <span role="img" aria-label="loading" className="animate-spin">⏳</span> Uploading...
                    </span>
                  ) : (
                    <span className="text-green-500 font-semibold inline-flex items-center gap-1">
                      <span role="img" aria-label="success">✔️</span> Uploaded
                    </span>
                  )}
                </div>
                <div className="w-full bg-indigo-100 rounded h-2 mt-2 relative">
                  <div
                    className={`h-2 rounded transition-all duration-300`}
                    style={{
                      width: `${percent}%`,
                      background: isUploading ? '#8a88f0' : '#3ecf8e',
                    }}
                  />
                  {isUploading && (
                    <span className="absolute right-2 top-0 text-xs text-gray-400">{percent}%</span>
                  )}
                </div>
              </div>
              <button
                className={`border-none bg-transparent cursor-pointer ml-3 text-2xl self-start mt-1 transition-colors
                  ${isUploading ? 'text-red-500 hover:text-red-600' : 'text-rose-600 hover:text-rose-700'}`}
                onClick={() => handleDelete(id)}
                title="Delete"
                aria-label="Delete"
              >
                {isUploading ? '✖️' : '🗑️'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FileUploadDropZone;