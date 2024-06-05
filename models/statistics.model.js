const db = require('./index');

class StatisticsModel {


    static async getCount(mission_detail) {
        const {rows} = await db.executeSql('select sum(duration) as 總步數,sum(distance) as 總距離' +
            ' from missioninfo where missionno in  ($1);', [mission_detail]);
        return rows[0];
    }

    static async getAccountCount(mission_main) {
        const {rows} = await db.executeSql('select count as 總人數 from mission where missionno in  ($1);', [mission_main]);
        return rows[0];
    }

    /**
     * 參加人次
     * @param mission_main
     * @returns {Promise<*>}
     */
    static async getParticipantsCount() {
        const sql=`
        select sum(count) as 總人次
from (select count(*), '計步' as types
      from (select missionno, accountserialno, finishtime::date
            from missioninfodetail
            where missionno
                      in
                  ('59240424', '59240429', '59240434', '59240439', '59240452', '59240453', '59240454', '59240402')
            group by missionno, accountserialno, finishtime::date) aa

      union


      select sum(stage), '打卡' as types
      from missioninfo
      where missionno = '59240403'
      union
      select sum(stage), '跑步' as types
      from missioninfo
      where missionno = '59240444'
      union

      select count(*), '掃碼' as types
      from (select missionno, accountserialno
            from missioninfo
            where missionno in ('59240449', '59240450', '59240451')
              and status = '2'
            group by missionno, accountserialno) aa
      union
      select sum(stage), '超慢跑' as types
      from missioninfo
      where missionno in
            ('59240455', '59240456', '59240457')
            union
      select count(*), '問卷' as types
      from missioninfo
      where missionno in
            ('59240445') and score='1'
      ) bb
        `
        console.log("sql",sql)
        const {rows} = await db.executeSql(sql, []);
        return rows[0];
    }


}

module.exports = StatisticsModel;
