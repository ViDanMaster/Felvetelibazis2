import { useSQLiteContext } from 'expo-sqlite';
import { Feladat } from './Feladat';

export function useDatabase() {
  const db = useSQLiteContext();

  return {
    fetchAllData: async () => {
      const result = await db.getAllAsync<Feladat>('SELECT * FROM Feladatok');
      return result;
    },

    fetchFeladatokByUser: async (tantargy: string, emelt: number, evszam: number) => {
      const result = await db.getAllAsync<Feladat>(
        'SELECT * FROM Feladatok WHERE Tantargy = ? AND Emelt = ? AND Evszam = ?',
        [tantargy, emelt, evszam]
      );
      return result;
    },

    getFeladatCount: async () => {
      const result = await db.getFirstAsync<{ count: number }>('SELECT COUNT(*) as count FROM Feladatok');
      return result?.count || 0;
    }
  };
}