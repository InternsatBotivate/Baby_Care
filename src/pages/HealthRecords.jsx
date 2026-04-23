import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockPatients, healthRecords } from '../data/mockData';
import ServicePage from '../components/ServicePage';
import { FileText, Download, Share2, Search, Filter, File, Image as ImageIcon } from 'lucide-react';

const HealthRecords = () => {
  const { id } = useParams();
  const { user } = useAuth();
  
  const patientId = id || user?.patientId;
  const patient = mockPatients.find(p => p.id === patientId) || mockPatients[2];

  return (
    <ServicePage 
      title={`Health Records: ${patient?.name}`} 
      icon={FileText}
      description="Securely store and manage medical certificates, test reports, and imaging."
    >
      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <div className="flex gap-2">
            <span className="bg-primary text-white px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-sm">All Records</span>
            <span className="bg-slate-50 text-slate-500 px-2.5 py-1 rounded-lg text-[11px] font-bold hover:bg-slate-100 cursor-pointer border border-slate-100 shadow-sm">Reports</span>
            <span className="bg-slate-50 text-slate-500 px-2.5 py-1 rounded-lg text-[11px] font-bold hover:bg-slate-100 cursor-pointer border border-slate-100 shadow-sm">Certificates</span>
          </div>
          <div className="flex gap-1.5">
            <button className="flex items-center gap-1.5 bg-primary text-white px-3 py-1.5 rounded-lg font-bold text-[11px] shadow-sm hover:scale-105 transition-all">
              <FileText size={14} />
              Upload New
            </button>
            <button className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 transition-all text-slate-400 shadow-sm">
              <Filter size={16} />
            </button>
          </div>
        </div>

        <div className="glass-card rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-white">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-4 py-3 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Document Name</th>
                <th className="px-4 py-3 font-bold text-[10px] text-slate-500 uppercase tracking-widest text-center">Type</th>
                <th className="px-4 py-3 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Date Uploaded</th>
                <th className="px-4 py-3 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Size</th>
                <th className="px-4 py-3 font-bold text-[10px] text-slate-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {healthRecords.map((record) => (
                <tr key={record.id} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${record.type === 'PDF' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                        {record.type === 'PDF' ? <File size={16} /> : <ImageIcon size={16} />}
                      </div>
                      <span className="font-bold text-slate-900 text-[13px]">{record.title}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${record.type === 'PDF' ? 'bg-red-50 text-red-500 border-red-100' : 'bg-blue-50 text-blue-500 border-blue-100'}`}>
                      {record.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[11px] text-slate-500 font-medium">{record.date}</td>
                  <td className="px-4 py-3 text-[10px] text-slate-400 font-bold uppercase tracking-widest">{record.size}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-all">
                        <Download size={14} />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-all">
                        <Share2 size={14} />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-slate-100 text-primary transition-all font-bold text-[10px] uppercase tracking-widest">
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ServicePage>
  );
};

export default HealthRecords;
